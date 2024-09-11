"use client";
import { useState } from "react";
import { FaFlagCheckered } from "react-icons/fa";
import BlackBackground from "../utils/blackBackground";
import SetClassForm from "./enrollInClass";
import { AvailableClass, StudentClasses } from "./enrolledClasses";

export function SignInClass({
  availableClasses,
  school_id,
  studentClasses,
}: {
  studentClasses: StudentClasses;
  school_id: string;
  availableClasses: AvailableClass[];
}) {
  const [display, setDisplay] = useState<boolean>(false);

  return (
    <>
      <button
        type="button"
        className=" fixed right-[20px] bottom-[100px] flex px-4 py-2 bg-six rounded-md shadow-md text-white justify-center items-center gap-2"
        onClick={() => setDisplay(true)}
      >
        <p>Marcar Aula</p>
        <span>
          <FaFlagCheckered />
        </span>
      </button>
      <BlackBackground setDisplay={setDisplay} display={display}>
        <SetClassForm
          school_id={school_id}
          setDisplay={setDisplay}
          availableClasses={availableClasses}
          studentClasses={studentClasses}
        />
      </BlackBackground>
    </>
  );
}
