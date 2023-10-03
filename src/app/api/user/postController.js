import connectDB from '@/app/libs/connectDB'
import { NextResponse } from 'next/server'
import { UserModel } from '../../models/User'

export const createUser = async (req, res)=>{
    await connectDB()
    try{
        const body = await req.json();
        const newUser = await UserModel.create(body);
        return NextResponse.json({data:newUser},{status:201})
    }catch(error){
        console.log(error)
        NextResponse.json({data: null}, {status:500})
    }
}

export const addFavorite = async (req, res)=>{
    await connectDB()
    try{
        const {favorites, _id}= await req.json();
        const user = await UserModel.findByIdAndUpdate(
            _id,
          {
            $addToSet: { favorites: favorites },
          },
          { new: true }
        )
        return NextResponse.json({data:user},{status:201})
    }catch(error){
        console.log(error)
        NextResponse.json({data: null}, {status:500})
    }
}