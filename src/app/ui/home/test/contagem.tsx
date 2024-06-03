"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Contagem = ({ userId }: { userId: string }) => {
  const [num, setNum] = useState<number>(0);
  function ABC() {
    console.log("Mandar dados");
  }

  useEffect(() => {
    ABC();
  }, [num]);
  return (
    <>
      <h1>ID DO USUÁRIO {userId}</h1>
      <Link href="/test">oi</Link>
      <Image
        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
        alt="Workflow"
        width={78}
        height={16}
      />

      <p>{num}</p>
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        adicionar
      </button>
      <button
        onClick={() => {
          setNum(num - 1);
        }}
      >
        diminuir
      </button>
    </>
  );
};

export default Contagem;
