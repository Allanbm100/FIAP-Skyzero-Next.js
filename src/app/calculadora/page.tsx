"use client"

import { PiKeyReturnFill } from "react-icons/pi";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useUserContext } from "@/context/UserContext";
import { useRouter } from "next/navigation";

export default function Calculadora() {
    const router = useRouter();

    const [distance, setDistance] = useState(0);
    const [valid, setValid] = useState<boolean>(false);
    const { idUsuario } = useUserContext();
    const [emission, setEmission] = useState<number | null>(null);
    const [tipoAviao, setTipoAviao] = useState<"PassengerAirplane" | "CargoAirplane">("PassengerAirplane");

    useEffect(() => {
        if (!idUsuario) {
            router.push("/login");
        }
    }, [idUsuario, router]);

    const handleDistanceChange = (event: any) => {
        setDistance(event.target.value)
    }

    const handleTipoAviaoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTipoAviao(event.target.value as "PassengerAirplane" | "CargoAirplane");
    };
    async function atualizarEmissao(registryId: any) {
        const url = `http://localhost:8080/registro/${registryId}/calcular`;
        const dados = {
            tipoAviao: tipoAviao,
            distancia: distance
        };

        try {
            const resposta = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dados)
            });

            if (!resposta.ok) {
                throw new Error(`Erro: ${resposta.statusText}`);
            }

            setEmission(await resposta.json());

            setValid(true);
        } catch (erro) {
            console.error("Erro ao atualizar emissão:", erro);
        }
    }

    return (
        <main>

        </main>
    )
}
