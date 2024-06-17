import Image from "next/image";
import Link from "next/link";
import * as React from 'react';

export default function Header() {

  return (
    
    <header className="flex gap-5 justify-between w-full">
      <Link href={"/"}>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b73ded016ee21b9f397ac8b28d787d0532e3cdf23746779b6cc5710985b2757?apiKey=5366c3b10aa44bf192572735faff851c&" className="shrink-0 w-20 aspect-square" alt="" />
      </Link>
      <Link href={"/login"} className="text-white justify-center px-6 py-3 my-auto rounded-2xl bg-teal-700 bg-opacity-90 max-md:px-5">
        Entrar
      </Link>
    </header>
  );
}





//export default Header;