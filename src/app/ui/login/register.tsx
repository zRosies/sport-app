"use client";
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { AiOutlineLoading } from "react-icons/ai";

import BlackBackground from "../utils/blackBackground";
import SuccessfulCreation from "./sucessfulMessage";
import { ErrorMessage } from "../utils/schema";

const Register = ({
  setTranslateX,
  translate,
}: {
  setTranslateX: Function;
  translate: boolean;
}) => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [created, setAccountCreated] = useState<boolean>(false);
  const [error, setError] = useState<ErrorMessage>({ message: "" });

  // Registering user to MongoDB
  const RegisterUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError({ message: "" });
    if (isSubmitting) {
      return;
    }
    setIsSubmitting(true);

    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement)
      .value;
    const passwor2 = (form.elements.namedItem("password2") as HTMLInputElement)
      .value;

    if (passwor2 != password) {
      setError({ message: "As senhas não coincidem." });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/session/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const data = await response.json();

      if (response.status === 400) {
        setError(data);
        setIsSubmitting(false);
      }
      if (response.status == 201) {
        setError({ message: "" });
        setIsSubmitting(false);
        setAccountCreated(true);
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <>
      <form
        className={`flex flex-col absolute top-[6rem] right-2 duration-300 ${
          !translate && "translate-x-[500px]"
        } self-center px-8 pt-3.5 pb-20 mt-12 w-full text-base text-black bg-white rounded-xl shadow-md shadow-gray-300 max-w-[398px] mx-auto`}
        onSubmit={RegisterUser}
      >
        <button
          type="button"
          className="text-start flex items-center hover:scale-[1.03] duration-200 ml-[-10px] text-[0.85rem] text-blue-500"
          onClick={() => setTranslateX(false)}
        >
          <IoIosArrowBack />
          Voltar
        </button>
        <p className="self-center text-2xl font-bold my-5">Criar Conta</p>
        <label htmlFor="email" className="my-auto flex gap-1 items-center">
          Email
          <span>
            <MdOutlineMail />
          </span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="shrink-0 mt-2.5 rounded-sm bg-zinc-100 h-[42px] px-2"
        />
        <label
          htmlFor="password"
          className="flex gap-1 self-start mt-3 items-center"
        >
          Senha{" "}
          <span>
            <RiLockPasswordLine />
          </span>{" "}
        </label>
        <input
          type="password"
          id="password"
          name="password"
          required
          className="shrink-0 mt-2 rounded-sm bg-zinc-100 h-[42px] px-2"
        />
        <label
          htmlFor="password2"
          className="flex gap-1 self-start mt-2.5 items-center"
        >
          Repetir senha
          <span>
            <RiLockPasswordLine />
          </span>
        </label>
        <input
          type="password"
          id="password2"
          name="password2"
          required
          className="shrink-0 mt-2.5 rounded-sm bg-zinc-100 h-[42px] px-2"
        />
        <p className="text-red-500">{error.message && error.message}</p>
        <button
          type="submit"
          disabled={isSubmitting}
          className="justify-center flex items-center px-10 py-3 mt-6 text-[1.1rem] font-bold text-white whitespace-nowrap bg-sky-600 rounded-md hover:bg-sky-700 duration-300 disabled:bg-gray-400"
        >
          Registrar
          {isSubmitting && (
            <span className="animate-spin ml-2">
              <AiOutlineLoading />
            </span>
          )}
        </button>
      </form>
      <BlackBackground display={created} setDisplay={setTranslateX}>
        <SuccessfulCreation
          setTranslateX={setTranslateX}
          hideSuccessfulMessage={setAccountCreated}
        />
      </BlackBackground>
    </>
  );
};

export default Register;
