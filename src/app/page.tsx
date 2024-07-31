import Image from "next/image";

import variable from "./styles/variables.module.scss";

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center justify-center w-full min-h-screen p-4 pt-20 my-12 gap-[120px]">
        <div className="flex flex-col lg:flex-row gap-5 w-full max-w-7xl items-center justify-between">
          <div className="text-xl flex-1 flex flex-col gap-[5px] items-start max-w-[500px]">
            <p className="text-[16px] ml-2   mb-[-5px] text-start">
              Eleve seu jogo
            </p>
            <h1 className="text-[40px] ml-2  font-extrabold text-black text-start w-[100%] leading-10">
              APRENDA <span className="text-blue-500">COM</span> OS{" "}
              <span className="text-blue-500">{`PRO'S`}</span>
            </h1>
            <p className="w-[100%] mt-[40px] text-center">
              Escolha seu esporte e professor, aprenda no seu horário.
            </p>
            <div className="flex justify-center mt-4 space-x-4 mx-auto">
              <button className="px-4 py-2 text-black border-[1px] border-black rounded hover:bg-[#0675C5] hover:text-white hover:border-[#0675C5] duration-200 w-[140px]">
                Saiba mais
              </button>
              <button className="px-4 py-2 bg-[#197967] text-white rounded hover:bg-[#1ABF7A] hover:border-[#1ABF7A] duration-200 w-[140px]">
                Começar
              </button>
            </div>
          </div>
          <div className="flex-1">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5e4fd0d4e29fd05c7f114a5386695f313b4af131fb3099907d7c0538b1df0c42?apiKey=5366c3b10aa44bf192572735faff851c&"
              alt="Descrição da imagem"
              className="w-full h-auto"
            />
          </div>
        </div>
        <div className="flex flex-col gap-5 mt-6 w-full max-w-7xl">
          <a
            href=""
            className="relative w-full h-[172px] rounded-[33px] overflow-hidden group"
          >
            <img
              loading="lazy"
              src={
                "https://cdn.builder.io/api/v1/image/assets/TEMP/012569ed1732005c8d868b37311ec95aea3eedc6785307ef3094a18010dfc658?apiKey=5366c3b10aa44bf192572735faff851c&"
              }
              alt={"imagem de esporte"}
              className="object-cover w-full h-full group-hover:scale-110 duration-200 relative "
            />
            <div className="absolute inset-0 bg-neutral-900 bg-opacity-60 flex items-center justify-center">
              <span className="text-white font-bold">Basquete</span>
            </div>
          </a>
        </div>
        <div className="w-full max-w-7xl mt-12 lg:mt-24">
          <h2 className="text-2xl font-bold mb-4 text-left">Horários</h2>
          <div className="flex flex-col lg:flex-row items-center lg:items-center">
            <div className="flex-1 mb-6 lg:mb-0">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b2f95f96f1558ec89a0b55f762159388145ca19bf370459bb363e84089e1da52?apiKey=5366c3b10aa44bf192572735faff851c&"
                alt="Visualização do design"
                className="w-full shadow-sm aspect-[1.12] max-w-md"
              />
            </div>
            <div className="lg:ml-10 mt-6 lg:mt-0 flex-1 flex flex-col items-center lg:items-center text-center">
              <h3 className="text-xl font-semibold">
                Aqui você faz o seu{" "}
                <span className="text-blue-500">horário</span>
              </h3>
              <p className="mt-2">Escolha seu horário e comece já.</p>
            </div>
          </div>
        </div>
        <div className="w-full max-w-7xl mt-12 lg:mt-24">
          <h2 className="text-2xl font-bold mb-4 text-left">EFICIÊNCIA</h2>
          <div className="flex flex-col lg:flex-row items-center lg:items-center">
            <div className="flex-1 mb-6 lg:mb-0">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5e4fd0d4e29fd05c7f114a5386695f313b4af131fb3099907d7c0538b1df0c42?apiKey=5366c3b10aa44bf192572735faff851c&"
                alt="Imagem de eficiência"
                className="w-full shadow-sm aspect-[1.12] max-w-md"
              />
            </div>
            <div className="lg:ml-10 mt-6 lg:mt-0 flex-1 flex flex-col items-center lg:items-center text-center">
              <h3 className="text-xl font-semibold">
                Maximização da <span className="text-blue-500">eficiência</span>
              </h3>
              <p className="mt-2">
                Otimize seu tempo e esforço com nossas técnicas comprovadas.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
