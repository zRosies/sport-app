import { getAvailableClasses } from "@/app/api/controllers/class";
import Image from "next/image";

export interface ClassInfo {
  _id: string;
  school_id: string;
  id: string;
  aula: {
    modalidade: string;
    quadra: {
      tipo: string;
      numero: number;
    };
    data: {
      horario_inicio: string;
      horario_fim: string;
      max_alunos: number;
      alunos: string[];
    };
    professor_id: string;
  };
}

export default async function SchoolInfo({ classId }: { classId: string }) {
  const response = await getAvailableClasses(classId);
  if (!response) {
    throw new Error("Error", response);
  }
  const schoolData: ClassInfo[] = await response.json();
  return (
    <section className="mt-12">
      <h1>MINHAS AULAS</h1>
      <section>
        {schoolData.map((school) => (
          <>
            <div className="flex">
              <p className="text-black">{school.aula.modalidade}</p>
              <div className="">
                <button type="button"></button>
                <button type="button"></button>
              </div>
            </div>
          </>
        ))}
      </section>
    </section>
  );
}
