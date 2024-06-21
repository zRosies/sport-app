import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { sessionInfo } from "../api/auth/[...nextauth]/options";
export const metadata: Metadata = {
  title: "Os Donos | Perfil",
  description:
    "Comece já seu gerenciamento por profissionais dedicados a vida esportiva",
};

export default async function LoginLayoyt({ children }: any) {
  const session = await sessionInfo();
  // console.log(session);
  if (session == null) {
    redirect("/");
  }
  return (
    <>
      <main>{children}</main>
    </>
  );
}
