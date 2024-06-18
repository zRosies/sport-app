import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
export const metadata: Metadata = {
  title: "Os Donos | Login",
  description:
    "Comece já seu gerenciamento por profissionais dedicados a vida esportiva",
};

export default async function LoginLayoyt({ children }: any) {
  const session = await getServerSession();
  console.log(session);

  if (session != null) {
    redirect("/profile");
  }

  return (
    <>
      <main>{children}</main>
    </>
  );
}
