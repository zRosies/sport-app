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

export async function getStudentClasses(userId: string) {
  const classCollection = await initDb("sport-app", "aula_aluno");
  const classInfo = await classCollection.findOne({ aluno_id: userId });

  if (!classInfo) {
    return NextResponse.json(
      {
        message: `No class found with id ${userId}`,
      },
      { status: 404 }
    );
  }

  return NextResponse.json(classInfo, { status: 200 });
}
