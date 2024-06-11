import Image from "next/image";
import GoogleIcon from "../icons/googleIcons";
import Apple from "../icons/apple";
import FacebookIcon from "../icons/facebook";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineMail } from "react-icons/md";

export default function LoginComponent({
  setTranslateX,
  translate,
}: {
  setTranslateX: Function;
  translate: boolean;
}) {
  return (
    <>
      <div
        className={`flex flex-col items-center self-center py-12 mt-16 w-full text-base duration-300 ${
          translate && "translate-x-[500px] "
        } bg-white rounded-xl shadow-md shadow-gray-300 max-w-[398px] mx-auto`}
      >
        <form className="flex flex-col self-stretch px-8">
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
            className="shrink-0 mt-2.5 rounded-sm bg-zinc-100 h-[42px]"
            name="email"
          />
          <label className="my-auto flex gap-1 items-center">
            Senha{" "}
            <span>
              <RiLockPasswordLine />
            </span>
          </label>
          <input className="shrink-0 mt-2 rounded-sm bg-zinc-100 h-[42px]" />
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
            className="flex gap-2.5 px-4 py-2 w-full text-black bg-amber-50 rounded-[8px] hover"
          >
            <GoogleIcon />
            <p className="mx-auto ">Logar com Google</p>
          </button>
          <button
            type="button"
            className="flex gap-2.5  px-5 py-2  w-full text-white bg-[#1278FF] rounded-[8px]"
          >
            <FacebookIcon />
            <p className="mx-auto">Logar com Facebook</p>
          </button>
          <button
            type="button"
            className="flex gap-2.5 px-5 py-2  w-full text-white rounded-[8px] bg-zinc-900 "
          >
            <Apple />
            <p className="mx-auto">Logar com Apple</p>
          </button>
        </div>
      </div>
    </>
  );
}
