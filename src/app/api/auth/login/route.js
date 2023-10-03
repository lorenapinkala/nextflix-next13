import connectDB from '@/app/libs/connectDB'
import { NextResponse } from 'next/server'
import  UserModel  from '@/app/models/User'



export const GET= async(req, res)=> {

    await connectDB()
    try{
        // const body = await req.json();
        // const newUser = await UserModel.create(body);
        return NextResponse.json({message:"hola a todos"},{status:201})
    }catch(error){
        console.log(error)
        NextResponse.json({data: null}, {status:500})
    }
  
  }