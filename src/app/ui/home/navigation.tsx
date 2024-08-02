"use client";
import { AiFillHome } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import { MdOutlineSportsScore } from "react-icons/md";
import { RiHome6Line } from "react-icons/ri";
import { FaPlus } from "react-icons/fa6";
import Link from "next/link";
import { useRouter } from "next/router";
import { usePathname, useSearchParams } from "next/navigation";
import { useState } from "react";
import BlackBackground from "../utils/blackBackground";

export default function Navigation() {
  const pathname = usePathname();
  const [openPlus, setOpenPlus] = useState<boolean>(false);

  //   console.log(pathname);

  return (
    <>
      <section className="fixed bottom-0 flex bg-white w-full shadow-nav left-0 justify-center py-4 gap-5 items-center z-[5]">
        <Link href={"/"} className="relative">
          {/* @ts-ignore */}
          <RiHome6Line className="h-[36px] w-[36px] text-secondary" />
          {pathname.replace("/", "").length == 0 && (
            <span className="w-10 p-[0.08rem] rounded-md absolute bottom-[-0.4rem] left-[50%] bg-primary transform -translate-x-1/2 -translate-y-1/2"></span>
          )}
        </Link>
        <div
          className="flex p-3 rounded-[50%] bg-six text-white hover:bg-primary cursor-pointer duration-200"
          onClick={() => {
            setOpenPlus(true);
          }}
        >
          {/* @ts-ignore */}
          <FaPlus className="h-8 w-8" />
        </div>
        <Link href={"/profile"} className="relative">
          {/* @ts-ignore */}
          <RxAvatar className="h-[36px] w-[36px] text-secondary" />
          {pathname.includes("profile") && (
            <span className="w-10 p-[0.08rem] rounded-md absolute bottom-[-0.4rem] left-[50%] bg-primary transform -translate-x-1/2 -translate-y-1/2"></span>
          )}
        </Link>
      </section>
      <BlackBackground display={openPlus} setDisplay={setOpenPlus}>
        <p></p>
      </BlackBackground>
    </>
  );
}
