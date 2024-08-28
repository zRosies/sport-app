import { NextResponse } from "next/server";
import { getAllSchools, sendSubscription } from "../controllers/school";

export async function GET(req: Request, context: any) {
  const apiKey = req.headers.get("apiKey");

  if (!apiKey || apiKey != process.env.NEXTAUTH_SECRET) {
    return NextResponse.json(
      { message: "You have no permission to perform this operation" },
      { status: 403 }
    );
  }
  try {
    const response = await getAllSchools();
    return response;
  } catch (error: any) {
    throw new Error(error.message);
  }
}
export async function POST(req: Request, context: any) {
  const apiKey = req.headers.get("apiKey");

  if (!apiKey || apiKey != process.env.NEXTAUTH_SECRET) {
    return NextResponse.json(
      { message: "You have no permission to perform this operation" },
      { status: 403 }
    );
  }
  try {
    const { schoolId, userId } = await req.json();
    const response = await sendSubscription(schoolId, userId);
    return response;
  } catch (error: any) {
    throw new Error(error.message);
  }
}
