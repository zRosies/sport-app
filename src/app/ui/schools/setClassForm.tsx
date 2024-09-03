import { IoMdClose } from "react-icons/io";

export default function SetClassForm({
  setDisplay,
}: {
  setDisplay: (variable: boolean) => void;
}) {
  return (
    <div className="bg-white w-[500px] h-[200px] absolute z-[100] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-3 rounded-md animate-display">
      <div className="flex justify-between">
        <p className="font-bold text-[0.70rem]">MARCAR AULA</p>

        <IoMdClose onClick={() => setDisplay(false)} />
      </div>
    </div>
  );
}
