import Image from "next/image";

import variable from "./styles/variables.module.scss";

export default function Home() {
  return (
    <>
      <main>
        <p className={variable.test}>Test</p>
      </main>
    </>
  );
}
