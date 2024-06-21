import SuccessIcon from "../icons/success";

const CurrentPaid = () => {
  return (
    <>
      <p className="font-bold text-[0.7rem] md:text-[0.8rem]">PAGAMENTOS</p>
      <div className="flex justify-center flex-col items-center mx-auto">
        <SuccessIcon />
        <p className="font-semibold text-center md:text-2xl text-green-500">
          Todos os pagementos estão em dia
        </p>
        <p className="text-[0.8rem] md:text-[1rem]">
          Parabéns, todos seus pagamentos estão em dia.
        </p>
      </div>
    </>
  );
};

export default CurrentPaid;
