import Image from "next/image";
import Link from "next/link";
import * as React from 'react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 flex gap-4 justify-between w-full bg-white shadow-md p-2 z-50">
      <Link href={"/"}>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b73ded016ee21b9f397ac8b28d787d0532e3cdf23746779b6cc5710985b2757?apiKey=5366c3b10aa44bf192572735faff851c&"
          className="shrink-0 w-16 aspect-square"
          alt=""
        />
      </Link>
      <Link
        href={"/login"}
        className="text-white justify-center px-4 py-2 my-auto rounded-xl bg-teal-700 bg-opacity-90 max-md:px-3"
      >
        Entrar
      </Link>
    </header>
  );
}

//export default Header;