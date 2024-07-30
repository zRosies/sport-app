import Image from "next/image";

import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <header className="flex flex-col p-5 bg-teal-700 bg-opacity-90 text-white ">
        <div className="flex self-end flex-col">
          <h1 className="text-[10px] md:text-[14px] lg:text-[16px]">Socials</h1>
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
        <p className="text-[10px] md:text-[14px] lg:text-[16px] text-center">
          Os Donos da Quadra © 2024 | All Rights Reserved
        </p>
      </header>
    </>
  );
};

export default Footer;