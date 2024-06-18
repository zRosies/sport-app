"use client";
import LoginComponent from "../ui/login/login";
import Register from "../ui/login/register";
import { useState } from "react";

export default function Login() {
  const [translateXLogin, setTranslateX] = useState<boolean>(false);
  return (
    <>
      <div className="max-w-[420px] mx-auto relative overflow-hidden">
        <LoginComponent
          setTranslateX={setTranslateX}
          translate={translateXLogin}
        />
        <Register setTranslateX={setTranslateX} translate={translateXLogin} />
      </div>
    </>
  );
}
