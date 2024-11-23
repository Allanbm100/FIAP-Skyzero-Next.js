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

    const handleSubmit = async (event: any) => {
        event.preventDefault()

        if (distance <= 0) {
            alert('Por favor, insira um valor maior do que 0')
            return
        }

        const registryParams = {
            usuario: { id: idUsuario },
            tipoAviao: tipoAviao,
            distancia: distance
        }

        try {
            const registryResponse = await fetch("http://localhost:8080/registro", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(registryParams),
            });

            if (registryResponse.ok) {
                const registryData = await registryResponse.json();

                const registryId = registryData.id;

                await atualizarEmissao(registryData.id)
            } else {
                throw new Error('Erro ao criar o registro. Tente novamente mais tarde.');
            }
        } catch (error) {
            console.error("Erro na requisição:", error);
            alert("Erro ao conectar ao servidor. Tente novamente mais tarde.");
        }
    }

    return (
        <main className="pt-10 sm:py-20 px-8 sm:px-24 md:px-40 lg:px-60 xl:px-96">
            <Link href={"/"} className="flex w-fit mb-12">
                <PiKeyReturnFill size={40} color="079b11" />
            </Link>
            <div className="flex flex-col items-center sm:justify-start mb-12">
                <h1 className="text-center text-[#079b11] font-bold text-3xl w-52 sm:w-auto sm:text-4xl mb-2">Calculadora de Emissão</h1>
                <p className="text-sm sm:text-base w-44 sm:w-auto text-gray-500">Descubra quanto de Co2 sua viagem de avião emite</p>
            </div>
            <form className="w-full flex flex-col mb-10 sm:mb-24" onSubmit={handleSubmit}>
                <div className="flex flex-row justify-around mb-4">
                    <label className={`flex items-center cursor-pointer p-2 rounded-md ${tipoAviao === "PassengerAirplane" ? "bg-green-500 text-white" : "bg-white text-gray-700"}`}>
                        <input
                            type="radio"
                            name="tipoAviao"
                            value="PassengerAirplane"
                            checked={tipoAviao === "PassengerAirplane"}
                            onChange={handleTipoAviaoChange}
                            className="mr-2"
                        />
                        Avião de Passageiros
                    </label>
                    <label className={`flex items-center cursor-pointer p-2 rounded-md ${tipoAviao === "CargoAirplane" ? "bg-green-500 text-white" : "bg-white text-gray-700"}`}>
                        <input
                            type="radio"
                            name="tipoAviao"
                            value="CargoAirplane"
                            checked={tipoAviao === "CargoAirplane"}
                            onChange={handleTipoAviaoChange}
                            className="mr-2"
                        />
                        Avião de Carga
                    </label>
                </div>
                <input
                    type="number"
                    placeholder="Distância em KM"
                    className="w-full border-2 rounded-xl p-3 mb-8 sm:mb-4"
                    onChange={handleDistanceChange}
                />
                <div className="flex flex-row justify-end items-center">
                    <button type="submit" className="py-2 px-6 border-2 border-[#079b11] rounded-md font-bold text-[#079b11]">
                        Calcular
                    </button>
                </div>
            </form>


            {valid === true &&
                <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-sm z-60">
                    <div className="flex flex-col items-center bg-white p-8 rounded-xl shadow-lg">
                        <p className="text-[#079b11] text-center font-bold text-lg sm:text-2xl mb-6">A emissão do seu voo é de:<br />{emission && (emission * 1000000).toFixed(2)} g de Co2</p>
                        <div className="flex gap-4 flex-col sm:flex-row">
                            <button
                                type="submit"
                                className="py-2 px-6 border-2 border-gray-500 rounded-md font-bold text-gray-500 text-sm"
                                onClick={() => (setValid(false), setEmission(null))}
                            >
                                Voltar
                            </button>
                        </div>
                    </div>
                </div>
            }
        </main>
    )
}
