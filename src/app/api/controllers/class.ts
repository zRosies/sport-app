import { NextResponse } from "next/server";
import { initDb } from "../connect/mongo";

export async function getAvailableClasses(classId: string) {
  const classCollection = await initDb("sport-app", "aulas");
  const classInfo = await classCollection
    .find({ school_id: classId })
    .toArray();
  console.log(classInfo);

  if (classInfo.length === 0) {
    return NextResponse.json(
      {
        message: `No class found with id ${classId}`,
      },
      { status: 404 }
    );
  }

  return NextResponse.json(classInfo, { status: 200 });
}
