"use client";
import { ReactNode, useState } from "react";
import { MessagesProps } from "./schema";

export default function BlackBackground({
  setDisplay,
  display,
  children,
}: MessagesProps) {
  return (
    <>
      {display && (
        <div
          onClick={() => setDisplay(false)}
          className="fixed w-full h-full bg-black opacity-30 top-0 z-20 left-0"
        ></div>
      )}
      {display && <>{children}</>}
    </>
  );
}
