"use server";

import { REST_METHOD } from "@/generated/prisma/enums";
import { prisma } from "@/lib/db";

export type Request ={
    name:string;
    method:REST_METHOD;
    url:string;
    body?:string,
    headers?:string,
    parameters?:string
}

export const addRequestToCollection = async(collectionId:string,value:Request)=>{
    const request = await prisma.request.create({
        data:{
            collectionId,
            name:value.name,
            method:value.method,
            url:value.url,
            body:value.body,
            headers:value.headers,
            parameters:value.parameters,
        }
    })
    return request;
} 


export const saveRequest = async(id:string,value:Request)=>{
    const request = await prisma.request.update({
        where:{
            id:id
        },
        data:{
               name:value.name,
               method:value.method,
            url:value.url,
            body:value.body,
            headers:value.headers,
            parameters:value.parameters,
        }
    });
    return request;
}


export const getAllRequestFromCollection = async(collectionId:string)=>{
    const requests = await prisma.request.findMany({
        where:{collectionId:collectionId}
    });
    return requests;
}

