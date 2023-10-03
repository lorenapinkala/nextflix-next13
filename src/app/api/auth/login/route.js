import connectDB from "@/app/libs/connectDB";
import { NextResponse } from "next/server";
import UserModel from "@/app/models/User";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const POST = async (req, res) => {
  try {
    await connectDB();
    const body = await req.json();
    const user = await UserModel.findOne({ email: body.email });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const { _id, username, email, password, salt, favorites } = user;
    const passwordHash = bcrypt.hashSync(body.password, salt);

    if (passwordHash !== password) {
      return NextResponse.json(
        { message: "Something went wrong" },
        { status: 401 }
      );
    }

    if (passwordHash === password) {
      const token = jwt.sign({ _id, username, email }, process.env.SECRET, {
        expiresIn: "5d",
      });

      const payload = jwt.verify(token, process.env.SECRET);

      req.user = payload;

      return NextResponse.json({ token, payload }, { status: 201 });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ data: null }, { status: 500 });
  }
};
