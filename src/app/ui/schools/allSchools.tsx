import Image from "next/image";

const AllSchools = ({}) => {
  return (
    <>
      <div className="flex justify-between p-3 items-center shadow-lg rounded-md ">
        <div className="flex items-center gap-2">
          <div className=" h-12 w-12 py-4 px-2 rounded-[50%] bg-blue-500" />
          <p className="font-semibold">School Name</p>
        </div>

        <button
          type="button"
          className="bg-forth hover:bg-five duration-200 text-white py-2 px-4 md:py-2 md:px-8 rounded-md text-sm"
        >
          Cadastrar
        </button>
      </div>
    </>
  );
};

export default AllSchools;
