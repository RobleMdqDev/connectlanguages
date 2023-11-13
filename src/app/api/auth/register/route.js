import {NextResponse} from "next/server";
import {hash} from "bcrypt";
import db from "@/libs/prisma";

export async function POST(request) {
  try {
    const data = await request.json();

    // validate email and password here
    const userFound = await db.user.findUnique({
      where: {email: data.email},
    });

    if (userFound)
      return NextResponse.json(
        {
          message: "The entered email is already in use.",
          data: {email: data.email},
        },
        {status: 409}
      );

    const hashedPassword = await hash(data.password, 10);
    const newUser = await db.user.create({
      data: {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: hashedPassword,
      },
    });

    return NextResponse.json({
      message: "success",
      data: {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
      },
    });
  } catch (error) {
    return NextResponse.json({message: error.message}, {status: 500});
  }
}
