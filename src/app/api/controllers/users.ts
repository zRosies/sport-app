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
      return existingUser;
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
    const user = await userColllection.insertOne(newUser);
    const response = await userColllection.findOne({
      _id: user.insertedId,
    });
    return response;
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

export async function updateUser(user: User) {
  const userColllection = await initDb("sport-app", "users");
  const response = await userColllection.updateOne(
    { userId: user.userId },
    { $set: user }
  );

  if (response.modifiedCount > 0) {
    return NextResponse.json(
      { message: "User updated successfully" },
      { status: 200 }
    );
  }

  return NextResponse.json({ message: "Error updating user" }, { status: 500 });
}

export default async function GetUserInfo(userId: string) {
  const userColllection = await initDb("sport-app", "users");
  const existingUser = await userColllection.findOne({ userId: userId });
  if (!existingUser) {
    return NextResponse.json({ message: "User not Found." }, { status: 400 });
  }

  return NextResponse.json(existingUser, { status: 200 });
}
