import { FaCircleCheck } from "react-icons/fa6";

export default function SuccessfulCreation({
  setTranslateX,
  hideSuccessfulMessage,
}: {
  setTranslateX: Function;
  hideSuccessfulMessage: Function;
}) {
  return (
    <>
      <div className="absolute rounded-md top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] max-w-[300px]  w-full flex flex-col items-center gap-3 p-5 bg-white z-30">
        {/*  @ts-ignore */}
        <FaCircleCheck className="w-12 h-12 text-green-500" />
        <h1 className="text-lg font-bold text-green-500 mt-4">Sucesso!</h1>
        <p className="text-gray-500 mt-2">Sua conta foi criada com sucesso.</p>
        <button
          onClick={() => {
            setTranslateX(false);
            hideSuccessfulMessage(false);
          }}
          className="bg-primary hover:bg-green-600 duration-200 text-white font-bold py-2 px-4 rounded w-full"
        >
          Accesse já
        </button>
      </div>
    </>
  );
}
