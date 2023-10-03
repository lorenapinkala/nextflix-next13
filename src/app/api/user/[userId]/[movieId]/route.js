import connectDB from "@/app/libs/connectDB";
import { NextResponse } from "next/server";
import UserModel from "@/app/models/User";

export const DELETE = async (request, { params }) => {

  await connectDB();
  try {
    const userId = params.userId;
    const id = parseInt(params.movieId);

    const user = await UserModel.findById(userId).exec();

    if (user) {
      const movieIndex = user.favorites.findIndex((favorite) => favorite.id === id);

      if (movieIndex !== -1) {
        user.favorites.splice(movieIndex, 1);
        await user.save();

        return NextResponse.json({ message: "Movie deleted" }, { status: 200 });
      } else {
        return NextResponse.json({ message: "Movie not found" }, { status: 404 });
      }
    } else {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }
  } catch (error) {
    console.log(error);
    NextResponse.json({ data: null }, { status: 500 });
  }
};
