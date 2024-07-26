import { School } from "./schoolsMain";

const UserSchools = ({ school }: { school: School }) => {
  return (
    <div className="p-3 shadow-lg flex justify-between rounded-md">
      <div className="flex gap-5">
        <div className=" h-12 w-12 p-2 rounded-[50%] bg-blue-500" />
        <div>
          <h3 className="text-[0.8rem] font-semibold">{school.name}</h3>
          <p className="text-[0.8rem]">{}</p>
          <p className="text-[0.8rem]">Datas</p>
        </div>
      </div>
      <button
        type="button"
        className="bg-forth hover:bg-five duration-200 text-white py-2 px-8 md:py-2 md:px-8 text-sm rounded-md flex mt-12 "
      >
        Acessar
      </button>
    </div>
  );
};

export default UserSchools;
