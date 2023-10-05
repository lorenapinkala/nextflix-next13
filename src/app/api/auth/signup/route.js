import connectDB from "@/app/libs/connectDB";
import { NextResponse } from "next/server";
import UserModel from "@/app/models/User";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

const setTokenCookie = async (token) => {
  cookies().set("token", token, { maxAge: 999999 });
};

export const POST = async (req, res) => {
  try {
    await connectDB();
    const body = await req.json();

   
    const existingUser = await UserModel.findOne({ email: body.email });

    if (existingUser) {
      return NextResponse.json(
        { error: "The user with this email address already exists." },
        { status: 400 }
      );
    }

    const user = await UserModel.create(body);

    if (user) {
      const token = jwt.sign(
        {
          username: user.username,
          email: user.email,
          _id: user._id,
          favorites: user.favorites,
        },
        process.env.SECRET,
        { expiresIn: "5d" }
      );

      const payload = jwt.verify(token, process.env.SECRET);

      await setTokenCookie(token);

      return NextResponse.json({ token, payload }, { status: 201 });
    } else {
      return NextResponse.json(
        { error: "The user could not be created" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "There was a problem processing the request." },
      { status: 500 }
    );
  }
};
