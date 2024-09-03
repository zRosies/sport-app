import { NextResponse } from "next/server";
import { getStudentClasses } from "../controllers/class";

export async function POST(req: Request) {
  const apiKey = req.headers.get("apiKey");

  if (!apiKey || apiKey != process.env.NEXTAUTH_SECRET) {
    return NextResponse.json(
      { message: "You have no permission to perform this operation" },
      { status: 403 }
    );
  }
  try {
    const { student_id } = await req.json();
    const response = await getStudentClasses(student_id);
    return response;
  } catch (error: any) {
    throw new Error(error.message);
  }
}
