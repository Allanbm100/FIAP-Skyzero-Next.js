"use client"

import Link from "next/link"
import { LogoIcon } from "../logoIcon/LogoIcon"
import { FaUserCircle } from "react-icons/fa";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { useUserContext } from "@/context/UserContext";

export const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { idUsuario } = useUserContext();;

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navLinks = idUsuario
        ? [
              { href: "/#integrantes", label: "Integrantes" },
              { href: "/calculadora", label: "Calculadora" },
              { href: "/registros", label: "Registros" },
          ]
        : [{ href: "/#integrantes", label: "Integrantes" }];

    return (
        <nav className="w-full h-20 border-b-4 border-gray-200">
            <div className="w-full h-full max-w-7xfull m-auto flex flex-wrap justify-between content-center px-8 sm:px-12 lg:px-12">
                <div className="flex">
                    <Link className="w-32 sm:w-44" href={"/"}>
                        <LogoIcon />
                    </Link>

                    <ul className="hidden lg:flex gap-10 items-center ml-6">
                        {navLinks.map(({ href, label }) => (
                            <li key={href}>
                                <Link href={href}>{label}</Link>
                            </li>
                        ))}
                    </ul>

                </div>

                {idUsuario ? (
                    <Link href={"/registros"} className="hidden lg:flex items-center">
                        <FaUserCircle
                            className="w-[30px] h-[30px]"
                            color="079b11"
                            id="user"
                        />
                    </Link>
                ) : (
                    <Link href={"/login"} className="hidden lg:flex items-center py-px px-4 border-2 rounded-xl border-[#079b11]">
                        <div className="flex items-center justify-center">
                            <FaUserCircle
                                className="w-[30px] h-[30px]"
                                color="079b11"
                                id="user"
                            />
                            <p className="text-[#079b11] text-lg font-medium ml-3">
                                Entrar
                            </p>
                        </div>
                    </Link>
                )}

                <button
                    className="lg:hidden"
                    onClick={toggleMenu}
                    type="button"
                >
                    <IoMenu className="w-[35px] h-[35px]" color="079b11" />
                </button>

                {isMenuOpen && (
                    <div className="absolute inset-x-0 top-20 bg-white shadow-lg py-8 sm:py-4 flex flex-col sm:flex-row gap-10 sm:gap-8 items-center justify-center lg:hidden z-50">
                        <Link
                            href={idUsuario ? "" : "/login"}
                            className={`flex items-center gap-2 justify-center w-36 sm:w-1/6 h-12 sm:h-10 border-2 rounded-lg 
                                ${idUsuario
                                    ? "border-[#079b11] text-[#079b11]"
                                    : "border-[#079b11] text-[#079b11] font-medium"
                                }`}
                        >
                            <FaUserCircle
                                className="w-[25px] h-[25px]"
                                color="#079b11"
                                id="user"
                            />
                            {!idUsuario && <span>Entrar</span>}
                        </Link>
                        {navLinks.map(({ href, label }) => (
                            <Link
                                key={href}
                                href={href}
                                className="flex items-center justify-center w-36 sm:w-1/6 h-12 sm:h-10 border-2 rounded-lg border-gray-600/80 text-gray-800 text-center"
                            >
                                {label}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    )
}