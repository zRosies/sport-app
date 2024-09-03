"use client";
import { LuClock } from "react-icons/lu";
import { FaTrashAlt } from "react-icons/fa";
import Image from "next/image";
import SchoolHeader from "./classHeader";
import { useState } from "react";

export interface ClassInfo {
  _id: string;
  school_id: string;
  id: string;
  aula: {
    modalidade: string;
    picture?: string;
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

export interface StudentClasses {
  aluno_id: string;
  pacote: string;
  agendamentos_disponiveis: number;
  agendamentos: {
    aula_id: string;
    data: string;
    modalidade: string;
    horario_inicio: string;
    horario_fim: string;
    picture: string;
  }[];
  reposicao: {
    aula_id: string;
    data_falta: string;
    data_limite_reposicao: string;
    data_cancelamento: string;
    justificativa: string;
    reposicao_aprovada: boolean;
  }[];
}

export default function SchoolInfo({
  school_id,
  schoolData,
}: {
  school_id: string;
  schoolData: StudentClasses;
}) {
  const [openForm, setOpenForm] = useState<boolean>(false);
  return (
    <section className="mt-12 flex flex-col gap-5 ">
      <h1 className="font-bold text-[0.8rem]">MINHAS AULAS</h1>
      <section className="flex flex-wrap gap-[20px]">
        {schoolData.agendamentos.map((school) => (
          <>
            <div className="flex border-2 gap-8 p-4 rounded-md shadow-md w-[460px]">
              <div className="w-[100px] h-[100px] overflow-hidden rounded-md">
                {school.picture && (
                  <Image
                    src={school.picture}
                    width={200}
                    height={200}
                    className="object-cover w-full h-full hover:scale-105 duration-200"
                    alt="school"
                  />
                )}
              </div>
              <div className="flex flex-col justify-between">
                <div className="text-[0.8rem]">
                  <p className="text-black">
                    <span className="font-medium ">Modalidade:</span>{" "}
                    {school.modalidade}
                  </p>
                  <p>
                    <span className="font-medium ">Início:</span>{" "}
                    {school.horario_inicio}
                  </p>
                  <p>
                    <span className="font-medium ">Término:</span>{" "}
                    {school.horario_fim}
                  </p>
                </div>
                <div className="flex gap-3 text-[0.9rem]">
                  <button
                    type="button"
                    className="px-1 py-1 bg-[#ec5a5a] text-white rounded-sm flex items-center gap-2 w-[130px] text-center justify-center"
                    onClick={() => {}}
                  >
                    Desmarcar <FaTrashAlt />
                  </button>
                  <button
                    type="button"
                    className="px-1 py-1 bg-forth text-white rounded-sm flex items-center gap-2 w-[130px] justify-center"
                  >
                    Remarcar <LuClock />
                  </button>
                </div>
              </div>
            </div>
          </>
        ))}
      </section>
    </section>
  );
}
