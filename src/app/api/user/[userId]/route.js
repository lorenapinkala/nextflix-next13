import connectDB from "@/app/libs/connectDB";
import { NextResponse } from "next/server";
import UserModel from "@/app/models/User";

export const DELETE = async (reques, { params }) => {

  await connectDB();
  try {

    const id = params.userId
 
    const deletedUser = await UserModel.findByIdAndRemove(id).exec();

    if (deletedUser) {
      return NextResponse.json({ message: "User deleted" }, { status: 200 });
    } else {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }
  } catch (error) {
    console.log(error);
    NextResponse.json({ data: null }, { status: 500 });
  }
};
