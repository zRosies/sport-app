"use client";
import Image from "next/image";
import { School } from "./schoolsMain";

const AllSchools = ({ school, userId }: { school: School; userId: string }) => {
  async function EnrollClass(schoolId: string, userId: string) {
    console.log("aaaaaaaaaaaaaaaaaaaa");
    // const response = await fetch("/api/schools", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `${process.env.API_TOKEN}`,
    //   },
    //   body: JSON.stringify({ userId, schoolId }),
    // });

    // if (response.status == 201) {
    //   console.log("User enrolled successfully");
    // }
  }

  return (
    <>
      <p onClick={() => EnrollClass("a", "b")}>teste</p>
      <div className="flex justify-between p-3 items-center shadow-lg rounded-md ">
        <div className="flex items-center gap-2">
          <div className=" h-12 w-12 py-4 px-2 rounded-[50%] bg-blue-500" />
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
            onClick={() => EnrollClass(school._id, userId)}
          >
            Matricular
          </button>
        )}
      </div>
    </>
  );
};

export default AllSchools;
