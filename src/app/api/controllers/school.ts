import { NextResponse } from "next/server";
import { initDb } from "../connect/mongo";

export default async function getSchoolInfo(schoolId: string) {
  const userColllection = await initDb("sport-app", "escola");

  const projection = {
    modalities: 1,
    name: 1,
    logo_pic: 1,
  };
  const existingSchool = await userColllection.findOne(
    { id: schoolId },
    { projection }
  );
  if (!existingSchool) {
    return NextResponse.json(
      { message: `School with ID ${schoolId} Found.` },
      { status: 400 }
    );
  }

  return NextResponse.json(existingSchool, { status: 200 });
}
