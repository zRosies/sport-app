"use client";
import { LuClock } from "react-icons/lu";
import { FaTrashAlt } from "react-icons/fa";
import Image from "next/image";
import SchoolHeader from "./classHeader";
import { useState } from "react";
import { SignInClass } from "./signInClass";
import BallIcon from "../icons/ball";

export interface AvailableClass {
  _id: string;
  school_id: string;
  id: string;
  date?: string;
  aula: {
    modalidade: string;
    picture: string;
    quadra: {
      tipo: string;
      numero: string;
    };
    data: {
      horario_inicio: string;
      horario_fim: string;
      max_alunos: number;
      alunos: string[];
    };
    professor_id: string;
    professor_name: string;
    days_available: string[];
  };
}

export interface StudentClasses {
  aluno_id: string;
  pacote: string;
  date: string;
  agendamentos_disponiveis: number;
  agendamentos: {
    aula_id: string;
    date: string;
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
  studentClasses,
  availableClasses,
}: {
  school_id: string;
  availableClasses: AvailableClass[];
  studentClasses: StudentClasses;
}) {
  const [openForm, setOpenForm] = useState<boolean>(false);
  // console.log(studentClasses);
  return (
    <section className="mt-12 flex flex-col gap-5 relative">
      <h1 className="font-bold text-[0.8rem]">MINHAS AULAS</h1>
      <section className="flex flex-wrap gap-[20px]">
        {studentClasses.agendamentos.length > 0 ? (
          <>
            {studentClasses.agendamentos.map((school, index) => (
              <div
                key={index}
                className="flex border-2 gap-2 md:gap-8 p-2 rounded-md shadow-md w-full max-w-[420px]"
              >
                <div className="w-[140px] h-[100px] overflow-hidden rounded-md">
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
                <div className="flex flex-col justify-between w-full">
                  <div className="text-[0.8rem] justify-center flex flex-col">
                    <p className="text-black font-bold text-center text-[1.1rem]">
                      {school.modalidade}
                    </p>
                    <p className="text-center text-[0.7rem]">
                      <span className="font-medium ">Início:</span>{" "}
                      {school.horario_inicio}
                    </p>
                    <p className="text-center text-[0.7rem]">
                      <span className="font-medium ">Data:</span> {school.date}
                    </p>
                    <p className="text-center text-[0.7rem]">
                      <span className="font-medium text-center">Término:</span>{" "}
                      {school.horario_fim}
                    </p>
                  </div>
                  <div className="flex gap-2 text-[0.9rem] w-full">
                    <button
                      type="button"
                      className="px-1 py-1 bg-[#c45353] hover:bg-[#da6161] duration-300 text-white text-[0.7rem] md:text-[1rem] rounded-sm flex items-center gap-2 w-full text-center justify-center"
                      onClick={() => {}}
                    >
                      Desmarcar <FaTrashAlt className="h-[0.7rem] w-[0.7rem]" />
                    </button>
                    <button
                      type="button"
                      className="px-2 py-1 bg-six text-white rounded-sm flex items-center gap-2 w-full  justify-center text-[0.7rem] md:text-[1rem]"
                    >
                      Remarcar <LuClock className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </>
        ) : (
          <div className="flex justify-center flex-col w-full items-center">
            <div className="flex flex-col gap-2">
              <p>Não se inscreveu em nenhuma aula ainda?</p>
              <p className="text-center">Matricule-se já!</p>
            </div>
            <BallIcon />
          </div>
        )}
      </section>
      <SignInClass
        availableClasses={availableClasses}
        school_id={school_id}
        studentClasses={studentClasses}
      />
    </section>
  );
}
