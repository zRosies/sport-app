import { getSchoolInfo, SchoolInfo } from "@/app/api/controllers/school";
import Image from "next/image";
import * as React from "react";

export default async function SchoolHeader({ schoolId }: { schoolId: string }) {
  const data = await getSchoolInfo(schoolId);

  const schoolInfo: SchoolInfo = await data.json();
  return (
    <div className="flex flex-col rounded-none w-[90%] mx-auto content-center">
      <div className="flex gap-5 justify-between content-center py-3 px-8 w-full bg-white rounded-md shadow-[1px_4px_4px_rgba(0,0,0,0.25)]">
        <div className="flex gap-4 items-center text-black">
          {schoolInfo.logo_pic ? (
            <Image
              className="p-2 rounded-[50%] w-[50px] h-[50px] flex justify-center items-center text-white"
              src={schoolInfo.logo_pic}
              width={200}
              height={200}
              alt="schoologo"
            />
          ) : (
            <div className="p-2 rounded-[50%] w-[50px] h-[50px] bg-primary flex justify-center items-center text-white">
              <p>{schoolInfo.name.slice(0, 1)}</p>
              <p>{schoolInfo.name.slice(1, 2)}</p>
            </div>
          )}
          <div className="flex flex-col self-start mt-5">
            <div className="self-start text-xs font-semibold">
              {schoolInfo.name}
            </div>
            <div className="mt-4 text-xs text-center">
              Agendamentos disponíveis
            </div>
          </div>
        </div>
        <div className=" mt-6 text-base font-medium text-center bg-primary rounded-md items-center flex justify-center h-[35px] min-h-[35px] text-zinc-100 w-[35px]">
          5
        </div>
      </div>
    </div>
  );
}
