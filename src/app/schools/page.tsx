import { IoSearchOutline } from "react-icons/io5";
import UserSchools from "../ui/schools/userSchools";
import AllSchools from "../ui/schools/allSchools";

export default async function Schools() {
  async function searchSchools(e: any) {
    const searchValue = e.target.value;
    // TODO: Search schools based on searchValue
  }
  return (
    <main className="mx-4 flex flex-col gap-6 max-w-[600px] md:mx-auto my-12">
      <div className="">
        <h1 className="font-bold  text-[.75rem]">CADASTRE-SE</h1>
        <p>Procure sua instituição e comece seu esporte já.</p>
        <form action="" className="mt-4">
          <label htmlFor="search" className="flex p-2 shadow-md rounded-lg">
            <input
              type="text"
              placeholder="Procurar..."
              className="w-full mr-5 outline-none"
            />
            <button className="bg-secondary text-white p-3 rounded-[50%] hover:bg-primary duration-200">
              {/* @ts-ignore */}
              <IoSearchOutline className="h-5 w-5" />
            </button>
          </label>
        </form>
      </div>

      <div
        className="max-h-[330px] overflow-y-scroll my-4 flex-col gap-6 flex shadow-lg rounded-md md:px-5 md:py-7"
        style={{ scrollbarWidth: "thin", scrollbarColor: "#fafafa" }}
      >
        <AllSchools />
        <AllSchools />
        <AllSchools />
        <AllSchools />
        <AllSchools />
        <AllSchools />
      </div>

      <h1 className="font-bold text-[.75rem]">MINHAS INSTITUIÇÕES</h1>
      <div
        className="max-h-[300px] overflow-y-scroll my-4 gap-5 flex flex-col shadow-lg rounded-md md:px-5 md:py-7"
        style={{ scrollbarWidth: "thin", scrollbarColor: "#fafafa" }}
      >
        <UserSchools />
        <UserSchools />
        <UserSchools />
        <UserSchools />
      </div>
    </main>
  );
}
