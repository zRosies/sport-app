import { School } from "./schoolsMain";

const UserSchools = ({ school }: { school: School }) => {
  return (
    <div className="p-3 shadow-lg flex justify-between rounded-md">
      <div className="flex gap-5">
        <div className=" h-12 w-12 p-2 rounded-[50%] bg-blue-500 flex justify-center items-center">
          <p className="text-[0.8rem] font-semibold text-white">
            {school.name.slice(0, 1).toUpperCase() +
              school.name.slice(1, 2).toUpperCase()}
          </p>
        </div>
        <div className="flex flex-col content-center">
          <h3 className="text-[0.8rem] font-semibold">{school.name}</h3>
          <div className="flex items-center">
            <p className="font-semibold text-[0.8rem]">Modalidade: </p>
            {school.modalities.map((modality, index) => (
              <p className="text-[0.8rem]" key={index}>
                {modality.type}
              </p>
            ))}
          </div>
          <div className="text-[0.8rem] flex">
            Horarios:{" "}
            {school.modalities.map((mod, index) => (
              <p className="mx-1" key={index}>
                {mod.schedule[0].time}{" "}
              </p>
            ))}
          </div>
        </div>
      </div>
      <button
        type="button"
        className="bg-forth hover:bg-five duration-200 text-white py-2 px-8 md:py-2 md:px-8 text-sm rounded-md flex mt-12 shadow-md"
      >
        Acessar
      </button>
    </div>
  );
};

export default UserSchools;
