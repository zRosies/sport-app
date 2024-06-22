import { IoIosArrowBack, IoIosArrowDropleft } from "react-icons/io";
import { User } from "../utils/schema";

const FormBreadcumb2 = ({user, translateX, setTranslateX}:{user:User, translateX:boolean, setTranslateX:Function}) => {
    return ( <>
     <div className={`absolute top-2 duration-300 ${translateX ? " absolute translate-x-0":  " translate-x-[-400px]"} w-[330px] md:w-[360px] gap-2 flex flex-col p-2 bg-white  `}>
            <label htmlFor="phone">Telefone:</label>
            <input
              className="bg-third outline-none p-1"
              type="tel"
              id="phone"
              name="phone"
              defaultValue={user.phone}
              required
            />

            <label htmlFor="address">Endereço:</label>
            <input
              className="bg-third outline-none p-1"
              type="text"
              id="address"
              name="address"
              required
            />
            
            <label htmlFor="city">City:</label>
            <input
              className="bg-third outline-none p-1"
              type="text"
              id="city"
              name="city"
              required
            />
            <label htmlFor="cep">CEP:</label>
            <input
              className="bg-third outline-none p-1"
              type="text"
              id="cep"
              name="cep"
              required
            />
            <label htmlFor="uf">Estado (UF):</label>
            <select className="p-2 border border-gray-800 cursor-pointer" id="uf" name="uf" required>
              <option value="">Select a state</option>
              <option value="AC">AC</option>
              <option value="AL">AL</option>
              <option value="AP">AP</option>
              <option value="AM">AM</option>
              <option value="BA">BA</option>
              <option value="CE">CE</option>
              <option value="DF">DF</option>
              <option value="ES">ES</option>
              <option value="GO">GO</option>
              <option value="MA">MA</option>
              <option value="MT">MT</option>
              <option value="MS">MS</option>
              <option value="MG">MG</option>
              <option value="PA">PA</option>
              <option value="PB">PB</option>
              <option value="PR">PR</option>
              <option value="PE">PE</option>
              <option value="PI">PI</option>
              <option value="RJ">RJ</option>
              <option value="RN">RN</option>
              <option value="RS">RS</option>
              <option value="RO">RO</option>
              <option value="RR">RR</option>
              <option value="SC">SC</option>
              <option value="SP">SP</option>
              <option value="SE">SE</option>
              <option value="TO">TO</option>
            </select>
         
             <p onClick={ ()=>setTranslateX(false)} className="text-green-600 flex gap-1 hover:scale-105 duration-200 items-center cursor-pointer my-2 text-start self-start"> <IoIosArrowBack/> Retornar</p>
      </div>
            
    </> );
}
 
export default FormBreadcumb2;