"use client";
import { getServerSession } from "next-auth";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { ImExit } from "react-icons/im";

export default function Header() {
  const session = useSession();

  return (
    <header className="fixed top-0 left-0 flex items-center justify-between w-full bg-white shadow-md p-2 z-50">
      <Link href={"/"}>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b73ded016ee21b9f397ac8b28d787d0532e3cdf23746779b6cc5710985b2757?apiKey=5366c3b10aa44bf192572735faff851c&"
          className="shrink-0 w-16 aspect-square"
          alt=""
        />
      </Link>
      {session?.data ? (
        <p>
          <button
            className="flex gap-2 items-center text-red-600 hover:scale-105 duration-200"
            onClick={() => signOut()}
          >
            Sair <ImExit />
          </button>
        </p>
      ) : (
        <Link
          href={"/login"}
          className="text-white justify-center px-4 py-2 my-auto rounded-md bg-teal-700 bg-opacity-90 md:w-[120px] flex content-center"
        >
          Entrar
        </Link>
      )}
    </header>
  );
}

//export default Header;
