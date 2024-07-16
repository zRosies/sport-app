const UserSchools = () => {
  return (
    <div className="p-3 shadow-lg flex justify-between">
      <div className="flex gap-5">
        <div className=" h-12 w-12 p-2 rounded-[50%] bg-blue-500" />
        <div>
          <h3 className="text-[0.8rem] font-semibold">SchoolName</h3>
          <p className="text-[0.8rem]">Modalidades</p>
          <p className="text-[0.8rem]">Datas</p>
        </div>
      </div>
      <button
        type="button"
        className="bg-forth text-white py-2 px-10 rounded-md flex mt-12 s"
      >
        Acessar
      </button>
    </div>
  );
};

export default UserSchools;
