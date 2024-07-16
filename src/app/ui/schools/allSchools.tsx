import Image from "next/image";

const AllSchools = ({}) => {
  return (
    <>
      <div className="flex justify-between p-3 items-center shadow-lg">
        <div className=" h-12 w-12 p-2 rounded-[50%] bg-blue-500" />
        <p>School Name</p>
        <button
          type="button"
          className="bg-forth text-white py-2 px-8 rounded-md"
        >
          Cadastrar
        </button>
      </div>
    </>
  );
};

export default AllSchools;
