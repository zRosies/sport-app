import { NextResponse } from "next/server";
import { initDb } from "../connect/mongo";
import { User } from "@/app/ui/utils/schema";
import { AvailableClass } from "@/app/ui/schools/classInfo";
import { PushOperator } from "mongodb";
export type SchoolInfo = {
  modalities: {}[];
  name: string;
  logo_pic: string;
  enrolled: string[];
  subscriptions: string[];
  id: number;
};

export async function getSchoolInfo(schoolId: string) {
  const userColllection = await initDb("sport-app", "escola");

  const projection = {
    modalities: 1,
    name: 1,
    logo_pic: 1,
    enrolled: 1,
    subscriptions: 1,
    id: 1,
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

export async function getAllSchools() {
  const userColllection = await initDb("sport-app", "escola");
  const existingSchool = await userColllection
    .find(
      {},
      {
        projection: {
          modalities: 1,
          name: 1,
          logo_pic: 1,
          enrolled: 1,
          subscriptions: 1,
          id: 1,
        },
      }
    )
    .toArray();

  return NextResponse.json(existingSchool, { status: 200 });
}
export async function sendSubscription(schoolId: string, userId: string) {
  const userColllection = await initDb("sport-app", "escola");
  const response = await userColllection.updateOne(
    { id: schoolId },
    { $push: { subscriptions: userId as any } }
  );

  if (response.modifiedCount < 1) {
    return NextResponse.json(
      { message: "Bad Request! Review the payload!" },
      { status: 400 }
    );
  }

  return NextResponse.json(
    { message: "Subscription sent successfully" },
    { status: 201 }
  );
}
