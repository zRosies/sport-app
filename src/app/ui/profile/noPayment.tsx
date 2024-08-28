import Wallet from "../icons/wallet";

const NoPayments = () => {
  return (
    <>
      <p className="font-bold text-[0.7rem] md:text-[0.8rem]">
        PAGAMENTOS REALIZADOS
      </p>
      <div className="self-center">
        <Wallet />
      </div>
      <p className="text-[0.8rem] md:text-[1rem]">
        Você ainda não tem nenhum pagamento realizado.
      </p>
    </>
  );
};

export default NoPayments;
