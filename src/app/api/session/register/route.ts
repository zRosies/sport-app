import { initDb } from "../../connect/mongo";
import bcrypt from "bcryptjs";
import { InsertOneResult } from "mongodb";
import { NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { createUser } from "../../controllers/users";

export async function POST(req: any) {
  try {
    const { email, password } = await req.json();
    const response = await createUser({ email: email, password: password });
    return response;
  } catch (error: any) {
    throw new Error(error.message);
  }
}
