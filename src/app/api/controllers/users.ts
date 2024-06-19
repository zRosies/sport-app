import { NextResponse } from "next/server";
import { initDb } from "../connect/mongo";
import bcrypt from "bcrypt";
import { User } from "@/app/ui/utils/schema";
import { InsertOneResult } from "mongodb";

export async function createUser({
  externalUser,
  email,
  password,
}: {
  externalUser?: any;
  email?: string;
  password?: string;
}) {
  const userColllection = await initDb("sport-app", "users");

  // --------------- Creating users in the db that used  google//facebook//apple to login  ----------
  if (externalUser) {
    const existingUser = await userColllection.findOne({
      email: externalUser.email,
    });

    if (existingUser) {
      return true;
    }

    const newUser = {
      email: externalUser.email,
      userId: crypto.randomUUID(),
      picture: externalUser.image,
      time: new Date().toISOString(),
      fullName: externalUser.name,
      birthdate: "",
      phone: "",
      cpf: "",
      gender: "",
      address: {
        uf: "",
        city: "",
        cep: "",
      },
    };
    await userColllection.insertOne(newUser);
    return true;
  }
  //----------------------------------------------------------------------------

  // ------------------ Creating user through normal credentials ----------------
  const existingUser = await userColllection.findOne({ email: email });
  if (existingUser) {
    return NextResponse.json(
      { message: "Este email já está sendo utilizado." },
      { status: 400 }
    );
  }

  // Hashing password and creating a new user format.
  const hashedPassword = await bcrypt.hash(password!, 10);
  const newUser: User = {
    email: email!,
    password: hashedPassword,
    userId: crypto.randomUUID(),
    time: new Date().toISOString(),
    fullName: "",
    birthdate: "",
    phone: "",
    picture: "",
    cpf: "",
    gender: "",
    address: {
      uf: "",
      city: "",
      cep: "",
    },
  };

  const response: InsertOneResult<Document> = await userColllection.insertOne(
    newUser
  );

  if (!response.acknowledged) {
    return NextResponse.json(
      { message: "Error during user creation" },
      { status: 500 }
    );
  }

  return NextResponse.json(
    { message: "User created successfully" },
    { status: 201 }
  );
}
