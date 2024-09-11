import Image from "next/image";
import { IoMdClose } from "react-icons/io";
import { AvailableClass, StudentClasses } from "./enrolledClasses";
import { FormEvent, SyntheticEvent, useState } from "react";
import { MdOutlineReportGmailerrorred } from "react-icons/md";
import { useSession } from "next-auth/react";
import BlackBackground from "../utils/blackBackground";
import EnrollSuccess from "./enrollMessage";

export default function SetClassForm({
  setDisplay,
  availableClasses,
  school_id,
  studentClasses,
}: {
  school_id: string;
  studentClasses: StudentClasses;
  setDisplay: (variable: boolean) => void;
  availableClasses: AvailableClass[];
}) {
  console.log(JSON.stringify(studentClasses.agendamentos_disponiveis));
  const session = useSession() as any;
  const weekdays = [
    "domingo",
    "segunda",
    "terça",
    "quarta",
    "quinta",
    "sexta",
    "sábado",
  ];
  const availableDays = ["segunda", "terça", "quarta", "quinta", "sexta"];

  // Use an array to manage errors for each class
  const [dateErrors, setDateErrors] = useState<string[]>([]);
  const [sucessMessage, setSucessMessage] = useState<boolean>(false);

  function disableUnavailableDates(
    e: any,
    days_available: string[],
    index: number
  ) {
    const selectedDay = new Date(e.target.value);
    const selectedDateIndex = selectedDay.getUTCDay();
    const selectedDate = weekdays[selectedDateIndex];

    if (!days_available.includes(selectedDate)) {
      const newErrors = [...dateErrors];
      newErrors[
        index
      ] = `${selectedDate} não está disponível na aula selecionada.`;
      setDateErrors(newErrors);
      return;
    }

    const newErrors = [...dateErrors];
    newErrors[index] = "";
    setDateErrors(newErrors);
  }

  async function EnrollInClass(
    e: React.FormEvent<HTMLFormElement>,
    classItem: AvailableClass,
    index: number
  ) {
    e.preventDefault();
    const selectedDate = (
      e.currentTarget.elements.namedItem("date") as HTMLFormElement
    ).value;

    if (studentClasses.agendamentos_disponiveis < 1) {
      const newErrors = [...dateErrors];
      newErrors[index] = `Você não tem agendamentos disponíveis!`;
      setDateErrors(newErrors);
      console.log("aaaaaa");
      return;
    }

    if (!selectedDate) {
      const currentError = [...dateErrors];
      currentError[index] = "Selecione uma data antes de se inscrever!";
      setDateErrors(currentError);
      return;
    }

    const [year, month, day] = selectedDate.split("-");

    setDateErrors([...dateErrors, (dateErrors[index] = "")]);

    const response = await fetch(`/api/class/${session.data?.user.userId}`, {
      headers: {
        "Content-Type": "application/json",
        apiKey: `${process.env.NEXT_PUBLIC_API_TOKEN}`,
      },

      method: "POST",
      body: JSON.stringify({ ...classItem, date: `${day}/${month}/${year}` }),
    });

    if (response.status === 201) {
      setSucessMessage(true);
    }
    // console.log(response);
  }

  return (
    <div className="bg-white w-full box-border max-w-[500px] h-[500px] absolute z-[100] top-[70%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-3 rounded-md animate-display overflow-hidden">
      <div className="flex justify-between">
        <p className="font-bold text-[0.70rem] ">MARCAR AULA</p>

        <IoMdClose onClick={() => setDisplay(false)} />
      </div>
      <section
        className="flex flex-col h-full max-h-[430px] w-full overflow-y-auto  gap-3 box-border mt-4 py-3 custom-scrollbar"
        style={{ scrollbarWidth: "thin" }}
      >
        {availableClasses.map((classItem, index) => {
          return (
            <form
              onSubmit={(e) => EnrollInClass(e, classItem, index)}
              className="p-2 flex shadow-md rounded-md h-[193px] w-[98%] mx-auto bg-white gap-2 md:gap-6"
              key={index}
            >
              <div>
                <div className="maw-w-[123px] h-[103px] rounded-md overflow-hidden ">
                  <Image
                    src={classItem.aula.picture}
                    alt="image"
                    width={200}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                </div>
                <p className="text-[0.7rem] text-start mt-4 flex justify-between px-1">
                  Professor(a):
                  <p>{classItem.aula.professor_name.split(" ")[0]}</p>
                </p>
                <p className="text-[0.7rem] text-start flex justify-between px-1">
                  Quadra: <p>{classItem.aula.quadra.tipo}</p>
                </p>
              </div>

              <div className="w-full flex flex-col gap-3">
                <div className="flex gap-2 md:gap-5 flex-col">
                  <p className="text-center font-bold">
                    {classItem.aula.modalidade}
                  </p>
                  <div className=" flex flex-col gap-2 text-[0.7rem] relative">
                    <p>
                      Horário: {classItem.aula.data.horario_inicio} -{" "}
                      {classItem.aula.data.horario_fim}{" "}
                    </p>
                    <div className="w-full flex items-center gap-2 text-[0.7rem]">
                      <p>Dias Disponíveis:</p>
                      <div>
                        {availableDays.map((weekday) => (
                          <span
                            key={weekday} // Add a key for better React rendering
                            className={`text-[0.5rem] px-2 py-[0.3rem] rounded-full  ${
                              classItem.aula.days_available.includes(weekday)
                                ? "bg-primary"
                                : "bg-gray-300"
                            } text-white mx-[0.1rem]`}
                          >
                            {weekday.charAt(0).toUpperCase()}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-2 justify-between border-[1px] border-[#3a3a3a] p-1 box-border text-[0.7rem]">
                      <p className="text-[0.7rem]">Selecionar data:</p>
                      <input
                        type="date"
                        name="date"
                        onChange={(e) =>
                          disableUnavailableDates(
                            e,
                            classItem.aula.days_available,
                            index // Pass the index to track which class
                          )
                        }
                      />
                    </div>
                    {dateErrors[index] && (
                      <span className="text-[0.6rem] flex gap-2 text-red-500 items-center absolute bottom-[-13px]">
                        <MdOutlineReportGmailerrorred /> {dateErrors[index]}
                      </span>
                    )}
                  </div>
                </div>

                <button className="bg-six hover:bg-secondary duration-200 text-white w-full p-[0.4rem] rounded-md text-[0.8rem] font-semibold">
                  Inscrever-me
                </button>
              </div>
            </form>
          );
        })}
      </section>
      {sucessMessage && (
        <BlackBackground display={sucessMessage} setDisplay={setSucessMessage}>
          <EnrollSuccess hideSuccessfulMessage={setSucessMessage} />
        </BlackBackground>
      )}
    </div>
  );
}
