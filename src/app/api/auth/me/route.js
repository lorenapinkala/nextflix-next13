import { NextResponse } from 'next/server';
import jwt from "jsonwebtoken";

const AuthMiddleware = (req, res, next) => {
  const tokenString = (req.headers.authorization || '').split(' ');
  const token = tokenString[1];
  console.log(token, "este es el token")

  if (!token) {
    return NextResponse.json({ message: "Token missing" }, { status: 401 });
  }

  try {
    const user = jwt.verify(token, process.env.SECRET);
    req.user = user;
    next();
  } catch (error) {
    return NextResponse.json({ message: "Token invalid or expired" }, { status: 401 });
  }
};

export const GET = async (req, res) => {
  try {
    // Accede al usuario autenticado desde req.user
    const user = req.user;

    // Puedes utilizar el usuario para realizar acciones específicas de "me"
    // Por ejemplo, obtener información del usuario actual
    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
};
