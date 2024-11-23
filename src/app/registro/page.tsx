"use client"

import { PiKeyReturnFill } from "react-icons/pi";
import Link from "next/link"
import { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useUserContext } from "@/context/UserContext";
import { useRouter } from "next/navigation";


function formatDate(date: string) {
    const formattedDate = new Date(date);
    return formattedDate.toLocaleDateString('pt-BR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

export default function Registros() {
    const router = useRouter();

    const [registros, setRegistros] = useState<any[]>([]);
    const { idUsuario } = useUserContext();
    const [error, setError] = useState<string | null>(null);

    const handleDelete = async (registryId: number) => {
        try {
            const response = await fetch(`http://localhost:8080/registro/deletar/${registryId}`, {
                method: "DELETE",
            });

            if (!response.ok) {
                throw new Error("Erro ao deletar registro");
            }

            setRegistros(registros.filter(registro => registro.id !== registryId));
        } catch (err) {
            setError(err instanceof Error ? err.message : "Erro desconhecido");
        }
    }

    useEffect(() => {
        if (!idUsuario) {
            router.push("/login");
        }
    }, [idUsuario, router]);

    useEffect(() => {
        async function fetchRegistros() {
            try {
                const response = await fetch("http://localhost:8080/registro");
                if (!response.ok) {
                    throw new Error("Erro ao carregar registros");
                }
                const data = await response.json();
                setRegistros(data);

            } catch (err) {
                setError(err instanceof Error ? err.message : "Erro desconhecido");
            }
        }

        fetchRegistros();
    }, []);

    return (
        <main>
           
        </main >
    )
}
