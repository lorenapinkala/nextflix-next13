import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';
import { headers } from 'next/headers'

export const GET = async (req) => {
  try {

    const headersList = headers()

    const token = headersList.get('authorization')

    if (!token) {
      return NextResponse.json({ message: "Token missing" }, { status: 401 });
    }

    const user = jwt.verify(token, process.env.SECRET);

    if (!user) {
      return NextResponse.json({ message: "Token invalid or expired" }, { status: 401 });
    }



    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
};

