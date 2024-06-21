"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import CurrentPaid from "./currentPaid";
import NoPayments from "./noPayment";
import { User } from "../utils/schema";

const ProfileInfo = ({ user }: { user: User }) => {
  const session = useSession();
  console.log(session);
  return (
    <>
      <button onClick={() => signOut()}>Sign out</button>
      <p className="font-bold">PERFIL</p>
      <p>Bem-vindo(a), {user.fullName}</p>

      <section className="flex flex-col md:flex-row md:justify-evenly md:items-start w-[100%]">
        <div className="w-[360px] mx-auto md:mx-0 flex flex-col items-center">
          {user.picture ? (
            <>
              <Image
                src={user.picture}
                width={80}
                height={80}
                className="rounded-[50%] mx-auto w-[60px] h-[60px] object-cover"
                alt="profile"
              />
            </>
          ) : (
            <p className="bg-orange-500 text-white rounded-[50%] mx-auto w-[60px] h-[60px] object-cover flex justify-center items-center font-bold font-2xl">
              {user.fullName && user.fullName.split(" ")[0][0]}{" "}
              {user.fullName && user.fullName.split(" ")[1][0]}
            </p>
          )}

          <form
            method="post"
            className=" relative w-[330px] md:w-[360px] gap-2 flex flex-col shadow-md p-5 bg-white"
          >
            <label
              htmlFor="image"
              className="absolute top-[-2rem] left-[12rem] bg-primary hover:bg-secondary duration-200 p-4 rounded-md w-[30px] h-[30px] text-white text-center align-center cursor-pointer flex items-center justify-center text-2xl"
            >
              {" "}
              +
              <input type="file" name="image" id="image" className="hidden" />
            </label>
            <label htmlFor="name">Name:</label>
            <input
              className="bg-third outline-none p-1"
              type="text"
              id="name"
              name="name"
              defaultValue={user.fullName}
              required
            />
            <label htmlFor="email">Email:</label>
            <input
              className="bg-third outline-none p-1"
              type="email"
              id="email"
              name="email"
              required
              defaultValue={user.email}
            />
            <label htmlFor="password">Password:</label>
            <input
              className="bg-third outline-none p-1"
              type="password"
              id="password"
              name="password"
              defaultValue={user.password}
              required
            />
            <label htmlFor="address">Address:</label>
            <input
              className="bg-third outline-none p-1"
              type="text"
              id="address"
              name="address"
              required
            />
            <label htmlFor="birthdate">Birthdate:</label>
            <input
              className=" outline-none p-1"
              type="date"
              id="birthdate"
              name="birthdate"
              defaultValue={user.birthdate}
              required
            />
            <label htmlFor="phone">Phone:</label>
            <input
              className="bg-third outline-none p-1"
              type="tel"
              id="phone"
              name="phone"
              defaultValue={user.phone}
              required
            />
            <label htmlFor="cpf">CPF:</label>
            <input
              className="bg-third outline-none p-1"
              type="text"
              id="cpf"
              name="cpf"
              defaultValue={user.cpf}
              required
            />
            <label htmlFor="city">City:</label>
            <input
              className="bg-third outline-none p-1"
              type="text"
              id="city"
              name="city"
              required
            />
            <label htmlFor="cep">CEP:</label>
            <input
              className="bg-third outline-none p-1"
              type="text"
              id="cep"
              name="cep"
              required
            />
            <label htmlFor="uf">State (UF):</label>
            <select className="p-1" id="uf" name="uf" required>
              <option value="">Select a state</option>
              <option value="AC">AC</option>
              <option value="AL">AL</option>
              <option value="AP">AP</option>
              <option value="AM">AM</option>
              <option value="BA">BA</option>
              <option value="CE">CE</option>
              <option value="DF">DF</option>
              <option value="ES">ES</option>
              <option value="GO">GO</option>
              <option value="MA">MA</option>
              <option value="MT">MT</option>
              <option value="MS">MS</option>
              <option value="MG">MG</option>
              <option value="PA">PA</option>
              <option value="PB">PB</option>
              <option value="PR">PR</option>
              <option value="PE">PE</option>
              <option value="PI">PI</option>
              <option value="RJ">RJ</option>
              <option value="RN">RN</option>
              <option value="RS">RS</option>
              <option value="RO">RO</option>
              <option value="RR">RR</option>
              <option value="SC">SC</option>
              <option value="SP">SP</option>
              <option value="SE">SE</option>
              <option value="TO">TO</option>
            </select>
            <button
              type="submit"
              className="bg-primary hover:bg-secondary duration-200 p-2 my-6 rounded-md text-white font-semibold w-[180px] mx-auto"
            >
              Salvar
            </button>
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
