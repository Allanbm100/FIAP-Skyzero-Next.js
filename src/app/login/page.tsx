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

        </main>
    )
}