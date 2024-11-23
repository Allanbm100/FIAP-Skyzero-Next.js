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
    return (
        <main>

        </main>
    )
}
