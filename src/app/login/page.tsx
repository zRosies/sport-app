"use client";
import LoginComponent from "../ui/login/login";
import Register from "../ui/login/register";
import { useState } from "react";
import { useSession } from "next-auth/react";

export default function Login() {
  const test = useSession();
  console.log(test);
  const [translateXLogin, setTranslateX] = useState<boolean>(false);
  return (
    <>
      <div className="max-w-[420px] h-[750px] mx-auto relative overflow-hidden">
        <LoginComponent
          setTranslateX={setTranslateX}
          translate={translateXLogin}
        />
        <Register setTranslateX={setTranslateX} translate={translateXLogin} />
      </div>
    </>
  );
}
