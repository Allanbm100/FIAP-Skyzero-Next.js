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
        <main className="pt-10 pb-20 sm:py-20 px-8 sm:px-24 md:px-40 lg:px-60 xl:px-96">
            <Link href={"/"} className="flex w-fit mb-12">
                <PiKeyReturnFill size={40} color="079b11" />
            </Link>
            <h1 className="w-full flex flex-col items-center justify-center text-[#079b11] font-bold text-3xl sm:w-auto sm:text-4xl mb-12">Registros</h1>
            {error && <p className="text-red-500">{error}</p>}

            <div className="w-full">
                {registros.length === 0 ? (
                    <p className="flex justify-center text-gray-500">Nenhum registro encontrado.</p>
                ) : (
                    <ul className="space-y-4">
                        {registros.map((registro, index) => (
                            <li key={index} className="w-full flex flex-col gap-7 sm:gap-0 sm:flex-row items-center bg-gray-100 px-4 py-8 rounded-lg shadow">
                                <div className="sm:w-1/2 flex flex-col items-center sm:items-start gap-2">
                                    <h1><strong>Tipo de Avião:</strong></h1>
                                    <p>{registro.tipoAviao}</p>
                                    <h1><strong>Distância:</strong></h1>
                                    <p>{registro.distancia} km</p>
                                    <h1><strong>Emissão Calculada:</strong></h1>
                                    <p>{(registro.emissaoCalculada * 1000).toFixed(2)} g de CO2</p>
                                    <h1><strong>Data do Registro:</strong></h1>
                                    <p>{formatDate(registro.dataRegistro)}</p>
                                </div>
                                <div className="sm:w-1/2 flex justify-center">
                                    <button type="submit" onClick={() => handleDelete(registro.id)}>
                                        <FaTrashAlt size={30} color="079b11" />
                                    </button>

                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </main >
    )
}
