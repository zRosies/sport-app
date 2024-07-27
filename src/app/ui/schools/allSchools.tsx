"use client";
import Image from "next/image";
import { School } from "./schoolsMain";
import { useState } from "react";
import BlackBackground from "../utils/blackBackground";
import EnrollSuccess from "./enrollMessage";

const AllSchools = ({ school, userId }: { school: School; userId: string }) => {
  const [sucess, setSucess] = useState<boolean>();
  async function EnrollClass(schoolId: string, userId: string) {
    const response = await fetch("/api/schools", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apiKey: `${process.env.NEXT_PUBLIC_API_TOKEN}`,
      },
      body: JSON.stringify({ userId: userId, schoolId: schoolId }),
    });

    console.log(await response.json());

    if (response.status == 201) {
      setSucess(true);
    }
  }

  return (
    <>
      <div className="flex justify-between px-4 items-center shadow-lg rounded-md py-5 ">
        <div className="flex items-center gap-5">
          {school.logo_pic ? (
            <Image
              src={`${school.logo_pic}`}
              alt={school.name}
              width={100}
              height={100}
            />
          ) : (
            <div className=" h-12 w-12 md:h-14 md:w-14 py-4 px-2 rounded-[50%] bg-blue-500 items-center justify-center flex text-white">
              <p className="font-semibold">
                {school.name.slice(0, 1).toUpperCase() +
                  school.name.slice(1, 2).toUpperCase()}
              </p>
            </div>
          )}
          <p className="font-semibold">{school.name}</p>
        </div>

        {school.enrolled.includes(userId) ? (
          <button
            type="button"
            className="bg-green-600 w-[120px] flex justify-center hover:bg-gray-300 duration-200 text-white py-2 px-4 md:py-2 md:px-8 rounded-md text-sm cursor-not-allowed"
          >
            Cadastrado
          </button>
        ) : school.subscriptions.includes(userId) ? (
          <button
            type="button"
            className="bg-orange-600 w-[120px] flex justify-center hover:bg-orange-500 duration-200 text-white py-2 px-4 md:py-2 md:px-8 rounded-md text-sm "
          >
            Pendente
          </button>
        ) : (
          <button
            type="button"
            className="bg-forth w-[120px] flex justify-center hover:bg-five duration-200 text-white py-2 px-4 md:py-2 md:px-8 rounded-md text-sm"
            onClick={() => EnrollClass(school.id, userId)}
          >
            Matricular
          </button>
        )}
      </div>
      {sucess && (
        <BlackBackground display={sucess} setDisplay={setSucess}>
          <EnrollSuccess hideSuccessfulMessage={setSucess} />
        </BlackBackground>
      )}
    </>
  );
};

export default AllSchools;
