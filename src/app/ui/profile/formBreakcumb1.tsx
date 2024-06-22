import Image from "next/image"
import { User } from "../utils/schema"
import { IoIosArrowForward } from "react-icons/io";

const FormBreadcumb1 = ({user, translateX, setTranslateX}:{user:User, translateX:boolean, setTranslateX:Function}) => {
    return (
         <>
            <div className={` duration-300 ${translateX && " absolute  translate-x-[400px]"}  w-[330px] md:w-[360px] gap-2 flex flex-col bg-white p-2`}>
         
            <label htmlFor="name">Nome:</label>
            <input
              className="bg-third outline-none p-1"
              type="text"
              id="name"
              name="name"
              defaultValue={user.fullName}
              required
            />
            <label htmlFor="email">E-mail:</label>
            <input
              className="bg-third outline-none p-1 text-gray-400"
              type="email"
              id="email"
              name="email"
              readOnly={true}
              defaultValue={user.email}
            />
            <label htmlFor="password">Senha:</label>
            <input
              className="bg-third outline-none p-1"
              type="password"
              id="password"
              name="password"
              defaultValue={user.password}
              required
            />
            <label htmlFor="password2">Confirmar Senha:</label>
            <input
              className="bg-third outline-none p-1"
              type="password"
              id="password2"
              name="password2"
              defaultValue={user.password}
              required
            />
            <label htmlFor="cpf">CPF:</label>
            <input
            
              className="bg-third outline-none p-1"
              type="text"
              id="cpf"
              name="cpf"
              defaultValue={user.cpf}
              required
            />
          
            <label htmlFor="birthdate">Data de Nascimento:</label>
            <input
              className=" outline-none p-1 border border-gray-700 cursor-pointer"
              type="date"
              id="birthdate"
              name="birthdate"
              defaultValue={user.birthdate}
              required
            />
            </div>
            <p onClick={ ()=>setTranslateX(true)} className="flex hover:scale-105 duration-200 gap-1 items-center self-end cursor-pointer my-2 text-green-600">Próximo <IoIosArrowForward/></p>
    </>);
}
 
export default FormBreadcumb1;