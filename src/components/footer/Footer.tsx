import { LogoIcon } from "../logoIcon/LogoIcon"
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


export const Footer = () => {
    return (
        <footer className="bg-black flex flex-col-reverse sm:flex-row items-center justify-between gap-8 sm:gap-0 py-10 px-8 xl:px-14">
            <div className="flex flex-col items-center sm:items-start gap-1">
                <div className="w-48 sm:w-72">
                    <LogoIcon fill="white" />
                </div>
                <p className="w-40 sm:w-auto text-white font-medium text-center sm:text-start text-xs md:text-sm">SkyZero &copy; 2024 - Todos os direitos reservados</p>
            </div>
            <div className="flex flex-col items-center text-white gap-1">
                <h2 className="border-2 rounded-lg px-2 md:px-4 py-1 bg-white text-black font-bold text-lg sm:text-xl">Nossos contatos</h2>
                <p>skyzero@gmail.com</p>
                <div className="flex flex-row gap-4">
                    <FaWhatsapp size={30} />
                    <FaInstagram size={30} />
                    <FaLinkedin size={30} />
                </div>
            </div>
        </footer>
    )
}