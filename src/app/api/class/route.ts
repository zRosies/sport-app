import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const apiKey = req.headers.get("apiKey");

  if (!apiKey || apiKey != process.env.NEXTAUTH_SECRET) {
    return NextResponse.json(
      { message: "You have no permission to perform this operation" },
      { status: 403 }
    );
  }
  try {
    return "response";
  } catch (error: any) {
    throw new Error(error.message);
  }
}
