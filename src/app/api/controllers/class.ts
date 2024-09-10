import { NextResponse } from "next/server";
import { initDb } from "../connect/mongo";
import { PushOperator } from "mongodb";
import { AvailableClass } from "@/app/ui/schools/classInfo";

export async function getAvailableClasses(classId: string) {
  const classCollection = await initDb("sport-app", "aulas");
  const classInfo = await classCollection
    .find({ school_id: classId })
    .toArray();

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

interface EnrolledClass {
  aula_id: string;
  date: string;
  modalidade: string;
  horario_inicio: string;
  horario_fim: string;
  picture: string;
}
interface MongoDocument {
  aula: {
    data: {
      alunos: EnrolledClass[]; // Array of EnrolledClass
    };
  };
  id: string; // Ensure this matches your document's ID field
  // Add any other fields as necessary
}

type EnrolledClassPushOperator = PushOperator<MongoDocument> & {
  aula: {
    data: {
      alunos: EnrolledClass[];
    };
  };
};

export async function subscribeInClass(
  studentId: string,
  existingClass: AvailableClass
) {
  const aulasCollection = await initDb("sport-app", "aulas");
  const aula_aluno = await initDb("sport-app", "aula_aluno");

  console.log(studentId);

  const enrolledClassFormat: EnrolledClass = {
    aula_id: existingClass.id,
    date: existingClass.date as string,
    modalidade: existingClass.aula.modalidade,
    horario_inicio: existingClass.aula.data.horario_inicio,
    horario_fim: existingClass.aula.data.horario_fim,
    picture: existingClass.aula.picture,
  };
  // addToSet is the same as push but it doesn't add again if the itemId already exists in the array/object
  const updateAula = await aulasCollection.updateOne(
    { id: existingClass.id },
    {
      $addToSet: { "aula.data.alunos": studentId },
    }
  );

  const updateAulaAluno = await aula_aluno.updateOne(
    { aluno_id: studentId },
    {
      $push: { agendamentos: enrolledClassFormat } as EnrolledClassPushOperator,
      $inc: { agendamentos_disponiveis: -1 },
    }
  );

  console.log(studentId);
  console.log(existingClass.id);
  console.log(updateAula);
  console.log(updateAulaAluno);

  // if (response.modifiedCount < 1) {
  //   return NextResponse.json(
  //     { message: "Bad Request! Review the payload!" },
  //     { status: 400 }
  //   );
  // }

  return NextResponse.json(
    { message: "Subscription sent successfully" },
    { status: 201 }
  );
}
