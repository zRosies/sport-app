"use client";
import { IoSearchOutline } from "react-icons/io5";
import UserSchools from "./userSchools";
import AllSchools from "./allSchools";
import { useState } from "react";
import BallIcon from "../icons/ball";

export interface School {
  _id: string;
  id: string;
  logo_pic: string;
  modalities: [
    {
      type: string;
      schedule: [
        {
          day: string;
          time: string;
        }
      ];
    }
  ];
  subscriptions: string[];
  enrolled: string[];
  name: string;
}
export default function SchoolsMain({
  schools,
  userId,
}: {
  schools: School[];
  userId: string;
}) {
  const [allSchools, setSchools] = useState<School[]>(schools);

  // console.log(schools.map((school) => school));

  async function searchSchools(e: any) {
    const searchValue = e.target.value;
    // TODO: Search schools based on searchValue
  }
  return (
    <main className="mx-4 flex flex-col gap-6 max-w-[600px] md:mx-auto my-12">
      <div className="">
        <h1 className="font-bold  text-[.75rem]">CADASTRE-SE</h1>
        <p>Procure sua instituição e comece seu esporte já.</p>
        <form action="" className="mt-4">
          <label htmlFor="search" className="flex p-2 shadow-md rounded-lg">
            <input
              type="text"
              placeholder="Procurar..."
              className="w-full mr-5 outline-none"
            />
            <button className="bg-secondary text-white p-3 rounded-[50%] hover:bg-primary duration-200">
              {/* @ts-ignore */}
              <IoSearchOutline className="h-5 w-5" />
            </button>
          </label>
        </form>
      </div>

      <div
        className="max-h-[330px] overflow-y-scroll my-4 flex-col gap-6 flex  rounded-md md:px-5 md:py-7"
        style={{ scrollbarWidth: "thin", scrollbarColor: "#fafafa" }}
      >
        {allSchools.map((school, index) => (
          <AllSchools key={index} school={school} userId={userId} />
        ))}
      </div>

      <h1 className="font-bold text-[.75rem]">MINHAS INSTITUIÇÕES</h1>
      {schools.some((school) => school.enrolled.includes(userId)) ? (
        <div
          className="max-h-[300px] overflow-y-scroll my-4 gap-5 flex flex-col rounded-md md:px-5 md:py-7"
          style={{ scrollbarWidth: "thin", scrollbarColor: "#fafafa" }}
        >
          {schools?.map(
            (school, index) =>
              school?.enrolled?.includes(userId) ? (
                <UserSchools key={index} school={school} />
              ) : null
            // <UserSchools key={index} school={school} />
          )}
        </div>
      ) : (
        <div className="flex justify-center flex-col  ">
          <p className="text-center">
            Não se inscreveu em nenhuma instituição ainda?
          </p>
          <BallIcon />
          <button
            type="button"
            className="bg-[#197967] hover:bg-[#308d7c] duration-200 text-white w-[200px] p-3 mx-auto rounded-md font-semibold"
            onClick={() => {
              window.scrollTo({ top: -200, behavior: "smooth" });
            }}
          >
            Inscrever-me
          </button>
        </div>
      )}
    </main>
  );
}
