import { initDb } from "../../connect/mongo";
import bcrypt from "bcryptjs";
import { InsertOneResult } from "mongodb";
import { NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function POST(req: any) {
  try {
    const test: any = await req.json();
    let password = "123";
    let email = "123";

    console.log(test);
    return NextResponse.json({ message: "it owrks" }, { status: 200 });
    const userColllection = await initDb("sport-app", "users");
    const existingUser = await userColllection.findOne({ email: email });

    if (existingUser) {
      return NextResponse.json(
        { message: "Email already in use" },
        { status: 400 }
      );
    }
    // Hashing password and creating new user format.
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = {
      email: email,
      password: hashedPassword,
      userId: crypto.randomUUID(),
      time: new Date().toISOString(),
    };

    console.log(hashedPassword);

    const response: InsertOneResult<Document> = await userColllection.insertOne(
      newUser
    );

    if (!response.acknowledged) {
      return NextResponse.json(
        { message: "Error during user creation" },
        { status: 500 }
      );
    }
    console.log("aaaaaaaaaaaa");
    return NextResponse.json(
      { message: "User created successfully" },
      { status: 201 }
    );
  } catch (error: any) {
    throw new Error(error.message);
  }
}
