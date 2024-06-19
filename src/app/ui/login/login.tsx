"use client";
import GoogleIcon from "../icons/googleIcons";
import Apple from "../icons/apple";
import FacebookIcon from "../icons/facebook";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineMail } from "react-icons/md";
import { useState } from "react";
import { ErrorMessage } from "../utils/schema";
import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";

export default function LoginComponent({
  setTranslateX,
  translate,
}: {
  setTranslateX: Function;
  translate: boolean;
}) {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<ErrorMessage>({ message: "" });

  async function Login(e: any) {
    e.preventDefault();
    setError({ message: "" });
    if (isSubmitting) {
      return;
    }

    try {
      const form = e.currentTarget;
      const email = (form.elements.namedItem("email") as HTMLInputElement)
        .value;
      const password = (form.elements.namedItem("password") as HTMLInputElement)
        .value;

      console.log(password, email);

      const response = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (response?.error) {
        setError({ message: "Invalid email or password" });
      }
      if (response?.url) {
        window.location.href = "/profile";
      } else {
        setError({ message: "" });
      }
    } catch (error: any) {
      console.log(error);
    }
  }

  return (
    <>
      <div
        className={`flex flex-col items-center self-center py-12 mt-16 w-full text-base duration-300 ${
          translate && "translate-x-[-500px] "
        } bg-white rounded-xl shadow-md shadow-gray-300 max-w-[398px] mx-auto`}
      >
        <form className="flex flex-col self-stretch px-8" onSubmit={Login}>
          <h1 className="self-center text-2xl my-5 font-bold text-black">
            Login
          </h1>
          <label className="my-auto flex gap-1 items-center" htmlFor="email">
            Email
            <span>
              <MdOutlineMail />
            </span>
          </label>
          <input
            value={"gustavo.enrollment@gmail.com"}
            className="shrink-0 mt-2.5 rounded-sm bg-zinc-100 h-[42px]"
            name="email"
            id="email"
          />
          <label className="my-auto flex gap-1 items-center" htmlFor="password">
            Senha{" "}
            <span>
              <RiLockPasswordLine />
            </span>
          </label>
          <input
            name="password"
            id="password"
            type="password"
            className="shrink-0 mt-2 rounded-sm bg-zinc-100 h-[42px]"
            value={123}
          />
          <button
            type="submit"
            className="justify-center items-center px-10 py-3 mt-6 text-[1.1rem] font-bold text-white whitespace-nowrap bg-sky-600 rounded-md hover:bg-sky-700 duration-300"
          >
            Entrar
          </button>
          <div className="flex gap-2 self-center mt-2 text-[0.95rem]">
            <div className="flex-auto text-black">Não tem uma conta?</div>
            <button
              type="button"
              className="text-blue-700 hover:underline"
              onClick={() => setTranslateX((prev: boolean) => !prev)}
            >
              Criar conta
            </button>
          </div>
          <div className="self-center text-black my-5">ou</div>
        </form>
        <div className="flex gap-3 flex-col w-full max-w-[324px]">
          <button
            type="button"
            className="flex gap-2.5 px-5 py-2 w-full text-[#242424] bg-amber-50 rounded-[8px] hover"
          >
            <GoogleIcon />
            <p
              className="mx-auto font-semibold "
              onClick={() => signIn("google")}
            >
              Logar com Google
            </p>
          </button>
          <button
            onClick={() => signIn("facebook")}
            type="button"
            className="flex gap-1  px-5 py-2  w-full text-white bg-[#1278FF] rounded-[8px] font-semibold"
          >
            <FacebookIcon />
            <p className="mx-auto">Logar com Facebook</p>
          </button>

          {/* <button
            type="button"
            className="flex gap-2.5 px-5 py-2  w-full text-white rounded-[8px] bg-zinc-900 "
            onClick={() => signIn("apple")}
          >
            <Apple />
            <p className="mx-auto">Logar com Apple</p>
          </button> */}
        </div>
      </div>
    </>
  );
}
