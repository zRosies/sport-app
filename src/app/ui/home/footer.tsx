import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
 
const Footer = () => {
  return (
    <>
      <header className="flex flex-col p-5 bg-green-500 text-white ">
        <div className="flex self-end flex-col">
          <h1>Socials</h1>
          <div className="flex gap-2">
            <a href="">
              <FaInstagram />
            </a>
            <a href="">
              <FaWhatsapp />
            </a>
            <a href="">
              <FaLinkedin />
            </a>
          </div>
        </div>
        <p className="text-center">
          Os Donos da Quadra © 2024 | All Rights Reserved
        </p>
      </header>
    </>
  );
};

export default Footer;
