import Image from "next/image";

import variable from "./styles/variables.module.scss";


export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center justify-center w-full h-screen">
        <div className="w-full text-center">
          <h1 className="text-3xl font-bold text-black">APRENDA COM OS PRO'S</h1>
        </div>
        <div className="flex gap-5 mt-4">
          <section className="text-xl text-left text-black max-w-[306px]">
            <p>Escolha seu esporte e professor, aprenda no seu horário.</p>
            <div className="mt-4 space-x-4">
              <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">Saiba mais</button>
              <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700">Começar</button>
            </div>
          </section>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5e4fd0d4e29fd05c7f114a5386695f313b4af131fb3099907d7c0538b1df0c42?apiKey=5366c3b10aa44bf192572735faff851c&"
            alt="Description of the image"
            className="max-w-xs"
          />
        </div>
        <div className="flex justify-center gap-5 mt-6 w-full">
          <button className="relative w-[200px] h-[172px] focus:outline-none transition transform hover:scale-105 active:scale-95 rounded-[33px] overflow-hidden">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/012569ed1732005c8d868b37311ec95aea3eedc6785307ef3094a18010dfc658?apiKey=5366c3b10aa44bf192572735faff851c&"
              alt="An image representing basquete"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-neutral-900 bg-opacity-60 flex items-center justify-center">
              <span className="text-white font-bold">BASQUETE</span>
            </div>
          </button>
          <button className="relative w-[200px] h-[172px] focus:outline-none transition transform hover:scale-105 active:scale-95 rounded-[33px] overflow-hidden">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/012569ed1732005c8d868b37311ec95aea3eedc6785307ef3094a18010dfc658?apiKey=5366c3b10aa44bf192572735faff851c&"
              alt="An image representing futebol"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-neutral-900 bg-opacity-60 flex items-center justify-center">
              <span className="text-white font-bold">FUTEBOL</span>
            </div>
          </button>
          <button className="relative w-[200px] h-[172px] focus:outline-none transition transform hover:scale-105 active:scale-95 rounded-[33px] overflow-hidden">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/012569ed1732005c8d868b37311ec95aea3eedc6785307ef3094a18010dfc658?apiKey=5366c3b10aa44bf192572735faff851c&"
              alt="An image representing vôlei"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-neutral-900 bg-opacity-60 flex items-center justify-center">
              <span className="text-white font-bold">VÔLEI</span>
            </div>
          </button>
        </div>
      </main>
    </>
  );
}



