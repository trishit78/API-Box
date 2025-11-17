"use server";

import { MEMBER_ROLE } from "@/generated/prisma/enums";
import { prisma } from "@/lib/db";
import { currentUser } from "@/modules/authentication/actions";

export const initializeWorkspace = async()=>{
    const user = await currentUser();
    if(!user){
        return {
            success:false,
            error:"user not found"
        }
    }

    try {
        const workspace = await prisma.workspace.upsert({
            where:{
                name_ownerId:{
                    ownerId:user.id,
                    name:"Personal Workspace"
                }
            },
            update:{},
            create:{
                name:"Personal Workspace",
                description:"Default workspace for personal use",
                ownerId:user.id,
                members:{
                    create:{
                        userId:user.id,
                        role:MEMBER_ROLE.ADMIN
                    }                    
                }
            },
            include:{
                members:true
            }
        });
        return {
            sucess:true,
            workspace
        }
    } catch (error) {
            console.error("Error initializing workspace",error);        
            return{
                success:false,
                error:'Failed to initialize workspace'
            }
    }
}

export async function getWorkspaces() {
    const user = await currentUser();
    if(!user) throw new Error('Unauthorized');
    const Workspaces = await prisma.workspace.findMany({
        where:{
            OR:[
                {ownerId:user.id},
                {members:{some:{userId:user.id}}}
            ]
        },
        orderBy:{createdAt:"asc"}
    });
    return Workspaces;
}

export async function createWorkspaces(name:string) {
    const user = await currentUser();
    if(!user) throw new Error("Unauthorized error");
    const workspace = await prisma.workspace.create({
        data:{
            name,
            ownerId:user.id,
            members:{
                create:{
                    userId:user.id,
                    role:MEMBER_ROLE.ADMIN
                }
            }
        }
    })

    return workspace;
}


export const getWorkspaceById = async(id:string)=>{
    const workspace = await prisma.workspace.findUnique({
        where:{id},
        include:{
            members:true
        }       
    });
    return workspace
}