import Contagem from "@/app/ui/home/contagem";

const Page = (context: any) => {
  const { params } = context;

  const userId = params.id;
  console.log(userId);
  return (
    <>
      <h1>Parametro: {userId}</h1>

      <Contagem userId={userId}/>
    </>
  );
};

export default Page;
