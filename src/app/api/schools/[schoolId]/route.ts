import { NextResponse } from "next/server";
import { getSchoolInfo } from "../../controllers/school";

export async function GET(req: Request, context: any) {
  const apiKey = req.headers.get("apiKey");

  if (!apiKey || apiKey != process.env.NEXTAUTH_SECRET) {
    return NextResponse.json(
      { message: "You have no permission to perform this operation" },
      { status: 403 }
    );
  }
  try {
    const response = await getSchoolInfo(context.params.schoolId);
    return response;
  } catch (error: any) {
    throw new Error(error.message);
  }
}
