import { IoSearchOutline } from "react-icons/io5";
import AllSchools from "../ui/schools/allschools";
import UserSchools from "../ui/schools/userSchools";

export default async function Schools() {
  return (
    <main className="mx-4">
      <div className="my-12">
        <h1 className="font-bold  text-[.75rem]">CADASTRE-SE</h1>
        <p>Procure sua instituição e comece seu esporte já.</p>
        <form action="" className="mt-4">
          <label htmlFor="search" className="flex p-2 shadow-md rounded-lg">
            <input type="text" placeholder="Procurar..." className="w-full" />
            <button className="bg-secondary text-white p-3 rounded-[50%]">
              {/* @ts-ignore */}
              <IoSearchOutline className="h-5 w-5" />
            </button>
          </label>
        </form>
      </div>

      <div className="max-h-[300px] overflow-y-scroll my-4 flex-col ">
        <AllSchools />
        <AllSchools />
        <AllSchools />
        <AllSchools />
        <AllSchools />
        <AllSchools />
      </div>

      <h1 className="font-bold text-[.75rem]">MINHAS INSTITUIÇÕES</h1>
      <div className="max-h-[300px] overflow-y-scroll my-4 gap-3 flex flex-col">
        <UserSchools />
        <UserSchools />
        <UserSchools />
        <UserSchools />
      </div>
    </main>
  );
}
