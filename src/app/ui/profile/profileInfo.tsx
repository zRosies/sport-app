"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import CurrentPaid from "./currentPaid";
import NoPayments from "./noPayment";
import { User } from "../utils/schema";
import FormBreadcumb1 from "./formBreakcumb1";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import FormBreadcumb2 from "./formBreadcumb2";

const ProfileInfo = ({ user }: { user: User }) => {
  // const session = useSession();
  const [translateX, setTranslateX] = useState<boolean>(false);
  // console.log(session);

  async function updateProfile(e: any) {
    e.preventDefault();
    // e.target.element.passowrd.value
    const updateUser: User = {
      fullName: e.target.elements.namedItem("name")?.value,
      email: user.email,
      picture: e.target.elements.namedItem("image")?.files?.[0] || user.picture,
      phone: e.target.elements.namedItem("phone")?.value,
      birthdate: e.target.elements.namedItem("birthdate")?.value,
      cpf: e.target.elements.namedItem("cpf")?.value,
      password: e.target.elements.namedItem("password")?.value,
      address: {
        uf: e.target.elements.namedItem("uf")?.value,
        city: e.target.elements.namedItem("city")?.value,
        cep: e.target.elements.namedItem("cep")?.value,
      },
      time: user.time,
      userId: user.userId,
    };
    console.log(updateUser);
  }

  return (
    <>
      <button onClick={() => signOut()}>Sign out</button>
      <p className="font-bold">PERFIL</p>
      <p>Bem-vindo(a), {user.fullName}</p>

      <section className="flex flex-col md:flex-row md:justify-evenly md:items-start w-[100%] my-12">
        <div className="w-[360px] mx-auto md:mx-0 flex flex-col items-center">
          {user.picture ? (
            <>
              <Image
                src={user.picture}
                width={80}
                height={80}
                className="rounded-[50%] mx-auto w-[60px] h-[60px] object-cover my-5"
                alt="profile"
              />
            </>
          ) : (
            <p className="bg-orange-500 text-white rounded-[50%] my-5 mx-auto w-[60px] h-[60px] object-cover flex justify-center items-center font-bold font-2xl">
              {user.fullName && user.fullName.split(" ")[0][0]}{" "}
              {user.fullName && user.fullName.split(" ")[1][0]}
            </p>
          )}
          <form method="post" className="relative" onSubmit={updateProfile}>
            <label
              htmlFor="image"
              className="absolute top-[-2rem] left-[12rem] bg-primary hover:bg-secondary duration-200 p-[0.8rem]   rounded-md w-[15px] h-[15px] text-white text-center align-center cursor-pointer flex items-center justify-center text-xl"
            >
              {" "}
              +
              <input type="file" name="image" id="image" className="hidden" />
            </label>
            <div className=" relative overflow-x-hidden shadow-md p-5 w-[330px] rounded-md flex flex-col items-center h-[590px] md:w-[380px] bg-white border-2  ">
              <FormBreadcumb1
                setTranslateX={setTranslateX}
                user={user}
                translateX={translateX}
              />
              <FormBreadcumb2
                setTranslateX={setTranslateX}
                user={user}
                translateX={translateX}
              />

              <button
                type="submit"
                className="bg-primary absolute bottom-2 hover:bg-secondary duration-200 p-2 my-6 rounded-md text-white font-semibold w-[180px] mx-auto"
              >
                Salvar
              </button>
            </div>
          </form>
        </div>
        <section className="flex flex-col gap-[8rem] mt-20 align-center md:pl-[6rem] md:border-l mx-6">
          <div>
            <CurrentPaid />
          </div>
          <div className="flex flex-col gap-5 ">
            <NoPayments />
          </div>
        </section>
      </section>
    </>
  );
};

export default ProfileInfo;
