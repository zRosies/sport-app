import { IoIosArrowBack } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

const Register = ({
  setTranslateX,
  translate,
}: {
  setTranslateX: Function;
  translate: boolean;
}) => {
  return (
    <>
      <form
        className={`flex flex-col absolute top-2 right-2 duration-300 ${
          !translate && "translate-x-[-500px]"
        } self-center px-8 pt-3.5 pb-20 mt-12 w-full text-base text-black bg-white rounded-xl shadow-md shadow-gray-300 max-w-[398px] mx-auto`}
      >
        <button
          type="button"
          className="text-start flex items-center hover:scale-[1.03] duration-200 ml-[-10px] text-[0.85rem] text-blue-500"
          onClick={() => setTranslateX(false)}
        >
          <IoIosArrowBack />
          Voltar
        </button>
        <div className="self-center text-3xl font-bold my-5">Criar Conta</div>
        <label className="my-auto flex gap-1 items-center">
          Email
          <span>
            <MdOutlineMail />
          </span>
        </label>
        <input className="shrink-0 mt-2.5 rounded-sm bg-zinc-100 h-[42px]" />
        <label className="flex gap-1 self-start mt-3 items-center">
          Senha{" "}
          <span>
            <RiLockPasswordLine />
          </span>{" "}
        </label>
        <input className="shrink-0 mt-2 rounded-sm bg-zinc-100 h-[42px]" />
        <label
          htmlFor="password2"
          className="flex gap-1 self-start mt-2.5 items-center"
        >
          Repetir senha{" "}
          <span>
            <RiLockPasswordLine />
          </span>
        </label>
        <input
          name="password2"
          className="shrink-0 mt-2.5 rounded-sm bg-zinc-100 h-[42px]"
        />
        <button
          type="submit"
          className="justify-center items-center px-10 py-3 mt-6 text-[1.1rem] font-bold text-white whitespace-nowrap bg-sky-600 rounded-md hover:bg-sky-700 duration-300"
        >
          Registrar
        </button>
      </form>
    </>
  );
};

export default Register;
