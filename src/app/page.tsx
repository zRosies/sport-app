import Image from "next/image";

import variable from "./styles/variables.module.scss";

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center justify-center w-full min-h-screen p-4">
        <div className="w-full text-center mb-6">
          <h1 className="text-3xl font-bold text-black">APRENDA COM OS PRO'S</h1>
        </div>
        <div className="flex flex-col lg:flex-row gap-5 w-full max-w-7xl items-center">
          <section className="text-xl text-center text-black flex-1 flex flex-col items-center">
            <p>Escolha seu esporte e professor, aprenda no seu horário.</p>
            <div className="mt-4 space-x-4">
              <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">Saiba mais</button>
              <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700">Começar</button>
            </div>
          </section>
          <div className="flex-1">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5e4fd0d4e29fd05c7f114a5386695f313b4af131fb3099907d7c0538b1df0c42?apiKey=5366c3b10aa44bf192572735faff851c&"
              alt="Descrição da imagem"
              className="w-full h-auto"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-6 w-full max-w-7xl">
          {[
            { id: 1, sport: "BASQUETE", imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/012569ed1732005c8d868b37311ec95aea3eedc6785307ef3094a18010dfc658?apiKey=5366c3b10aa44bf192572735faff851c&", alt: "Uma imagem representando basquete" },
            { id: 2, sport: "FUTEBOL", imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/012569ed1732005c8d868b37311ec95aea3eedc6785307ef3094a18010dfc658?apiKey=5366c3b10aa44bf192572735faff851c&", alt: "Uma imagem representando futebol" },
            { id: 3, sport: "VÔLEI", imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/012569ed1732005c8d868b37311ec95aea3eedc6785307ef3094a18010dfc658?apiKey=5366c3b10aa44bf192572735faff851c&", alt: "Uma imagem representando vôlei" },
          ].map(({ id, sport, imgSrc, alt }) => (
            <a
              key={id}
              href=""
              className="relative w-full h-[172px] focus:outline-none transition transform hover:scale-105 active:scale-95 rounded-[33px] overflow-hidden block"
            >
              <img
                loading="lazy"
                src={imgSrc}
                alt={alt}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-neutral-900 bg-opacity-60 flex items-center justify-center">
                <span className="text-white font-bold">{sport}</span>
              </div>
            </a>
          ))}
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
                Aqui você faz o seu <span className="text-blue-500">horário</span>
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
              <p className="mt-2">Otimize seu tempo e esforço com nossas técnicas comprovadas.</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
