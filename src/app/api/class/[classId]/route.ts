import { NextResponse } from "next/server";
import { getAvailableClasses, subscribeInClass } from "../../controllers/class";
import { RequestContext } from "next/dist/server/base-server";

export async function GET(
  req: Request,
  context: { params: { classId: string } }
) {
  const apiKey = req.headers.get("apiKey");

  if (!apiKey || apiKey != process.env.NEXTAUTH_SECRET) {
    return NextResponse.json(
      { message: "You have no permission to perform this operation" },
      { status: 403 }
    );
  }
  try {
    const response = await getAvailableClasses(context.params.classId);
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

  const userInfo = await req.json();
  const studentId = context.params.classId;

  console.log(userInfo);

  try {
    const response = await subscribeInClass(studentId, userInfo);
    return response;
  } catch (error: any) {
    throw new Error(error.message);
  }
}
