"use client"

import { PiKeyReturnFill } from "react-icons/pi";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUserContext } from "@/context/UserContext";


export default function Login() {
    const router = useRouter();

    const { setIdUsuario } = useUserContext();
    const [logged] = useState(false);
    const [cnpj, setCnpj] = useState("");
    const [password, setPassword] = useState("");

    const handleCnpjChange = (event: any) => {
        setCnpj(event.target.value);
    }

    const handlePasswordChange = (event: any) => {
        setPassword(event.target.value);
    }

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        const loginData = {
            cnpj: cnpj,
            senha: password,
        };

        try {
            const response = await fetch("http://localhost:8080/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(loginData),
            });

            if (response.ok) {
                const data = await response.json();
                setIdUsuario(data.id_usuario);
                alert("Login realizado com sucesso!");
                router.push("/registros");

                setCnpj("");
                setPassword("");

                router.push
            } else {
                const errorData = await response.text();
                alert(`Erro ao realizar login: ${errorData}`);
            }
        } catch (error) {
            console.error("Erro ao enviar os dados:", error);
            alert("Erro ao conectar ao servidor. Tente novamente mais tarde.");
        }
    }

    return (
        <main>
            <main className="pt-10 pb-20 sm:py-20 px-8 sm:px-24 md:px-40 lg:px-60 xl:px-96">
                <Link href={"/"} className="flex w-fit mb-12">
                    <PiKeyReturnFill size={40} color="079b11" />
                </Link>
                <div className="flex flex-col items-center">
                    <h1 className="text-[#079b11] font-bold text-3xl w-56 sm:w-auto sm:text-4xl mb-12">Acessar Conta</h1>
                </div>
                <form className="w-full flex flex-col mb-24" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="CNPJ"
                        className="w-full border-2 rounded-xl p-3 mb-4"
                        value={cnpj}
                        onChange={handleCnpjChange}
                    />
                    <input
                        type="password"
                        placeholder="Senha"
                        className="w-full border-2 rounded-xl p-3 mb-8"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    <div className="flex flex-col gap-8 sm:gap-0 sm:flex-row sm:justify-between items-center">
                        <Link href={"/"} className="text-[#079b11] underline text-sm">Esqueci a minha senha</Link>
                        <button type="submit" className="py-2 px-6 border-2 border-[#079b11] rounded-md font-bold text-[#079b11]">
                            Entrar
                        </button>
                    </div>
                </form>
            </main>
        </main>
    )
}