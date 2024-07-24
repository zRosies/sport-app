import { NextApiRequest } from "next";
import { createUser, updateUser } from "../controllers/users";
import { NextResponse } from "next/server";

export async function POST(req: any) {
  const apiKey = req.headers.get("apiKey");

  if (!apiKey || apiKey != process.env.NEXTAUTH_SECRET) {
    return NextResponse.json(
      { message: "You have no permission to perform this operation" },
      { status: 403 }
    );
  }

  try {
    const { email, password } = await req.json();
    const response = await createUser({ email: email, password: password });
    return response;
  } catch (error: any) {
    throw new Error(error.message);
  }
}
export async function PUT(req: Request) {
  const apiKey = req.headers.get("apiKey");

  if (!apiKey || apiKey != process.env.NEXTAUTH_SECRET) {
    return NextResponse.json(
      { message: "You have no permission to perform this operation" },
      { status: 403 }
    );
  }
  try {
    const updatedUser = await req.json();
    const response = await updateUser(updatedUser);
    return response;
  } catch (error: any) {
    throw new Error(error.message);
  }
}
