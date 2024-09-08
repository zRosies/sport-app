"use client";
import { useState } from "react";
import { FaFlagCheckered } from "react-icons/fa";
import BlackBackground from "../utils/blackBackground";
import SetClassForm from "./setClassForm";
import { AvailableClass } from "./classInfo";

export function SignInClass({
  availableClasses,
}: {
  availableClasses: AvailableClass[];
}) {
  const [display, setDisplay] = useState<boolean>(false);
  return (
    <>
      <button
        type="button"
        className=" absolute right-[20px] bottom-[-200px] flex px-4 py-2 bg-six rounded-md shadow-md text-white justify-center items-center gap-2"
        onClick={() => setDisplay(true)}
      >
        <p>Marcar Aula</p>
        <span>
          <FaFlagCheckered />
        </span>
      </button>
      <BlackBackground setDisplay={setDisplay} display={display}>
        <SetClassForm
          setDisplay={setDisplay}
          availableClasses={availableClasses}
        />
      </BlackBackground>
    </>
  );
}
