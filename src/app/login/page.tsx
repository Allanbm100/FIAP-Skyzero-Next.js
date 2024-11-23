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


    return (
            <main>

            </main>
    )
}