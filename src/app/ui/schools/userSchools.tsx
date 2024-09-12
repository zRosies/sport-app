"use client";
import { redirect } from "next/navigation";
import { School } from "./schoolsMain";
import Link from "next/link";
import { Buffer } from "buffer";

const UserSchools = ({ school }: { school: School }) => {
  return (
    <div className="py-6 px-3 h-[140px] shadow-lg flex justify-between rounded-md">
      <div className="flex gap-5">
        <div className=" h-12 w-12 p-2 rounded-[50%] bg-blue-500 flex justify-center items-center">
          <p className="text-[0.8rem] font-semibold text-white">
            {school.name.slice(0, 1).toUpperCase() +
              school.name.slice(1, 2).toUpperCase()}
          </p>
        </div>
        <div className="flex flex-col content-center">
          <h3 className="text-[0.8rem] font-semibold">{school.name}</h3>
          <div className="flex items-center">
            <p className="font-semibold text-[0.8rem]">Modalidade: </p>
            {school.modalities.map((modality, index) => (
              <p className="text-[0.8rem] mx-[0.05rem]" key={index}>
                {modality.type}
                {index < school.modalities.length - 1 && ","}
              </p>
            ))}
          </div>
          <div className="text-[0.8rem] flex">
            Horarios:{" "}
            {school.modalities.map((mod, index) => (
              <p className="mx-[0.05rem]" key={index}>
                {mod.schedule[0].time}
                {index < school.modalities.length - 1 && ","}
              </p>
            ))}
          </div>
        </div>
      </div>
      <Link
        type="button"
        href={`schools/${school.id}`}
        className="bg-[#1977F3] hover:bg-five duration-200 text-white py-2 px-8 md:py-2 md:px-12 text-sm rounded-md flex mt-12 shadow-md items-center h-[2.4rem] font-semibold"
      >
        Acessar
      </Link>
    </div>
  );
};

export default UserSchools;
