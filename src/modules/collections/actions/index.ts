"use server";

import { prisma } from "@/lib/db";

export const createCollection = async(workspaceId:string,name:string)=>{
    const collection = await prisma.collection.create({
        data:{
            name,
            workspace:{
                connect:{
                    id:workspaceId
                }
            }
        }
    });
    return collection;
}

export const getCollections = async(workspaceId:string)=>{
    const collection = await prisma.collection.findMany({
        where:{
            workspaceId
        }
    });
    return collection
}

export const deleteCollection = async(collectionId:string)=>{
    await prisma.collection.delete({
        where:{
            id:collectionId
        }
    })
}

export const editCollection = async(collectionId:string,name:string)=>{
    await prisma.collection.update({
        where:{
            id:collectionId
        },
        data:{
            name
        }
    })
}