import connectDB from '@/app/libs/connectDB'
import { NextResponse } from 'next/server'
import  UserModel  from '@/app/models/User'


export const POST= async(req, res)=> {

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
    return NextResponse.json({user},{status:201})
}catch(error){
    console.log(error)
    NextResponse.json({data: null}, {status:500})
}

}