import { FaCalculator } from "react-icons/fa";
import { IoIosSave } from "react-icons/io";
import { IoPieChartSharp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";
import backgroundImage from "@/assets/images/section1-wpp.jpg"
import Image from "next/image"

export default function Home() {
  return (
    <main>
      <section className="relative h-[538px] w-full">
        <div className="absolute inset-0 z-[-1]">
          <Image
            src={backgroundImage}
            alt="Background"
            fill
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
              filter: 'hue-rotate(-5deg) brightness(0.5)',
            }}
            priority
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-2 pt-48 sm:pt-[160px]">
          <h1 className="text-3xl sm:text-5xl font-bold text-center text-white">POR UM FUTURO</h1>
          <h1 className="text-3xl sm:text-5xl font-bold text-center text-white">MAIS VERDE</h1>
          <p className="w-40 sm:w-[350px] sm:text-lg font-light text-center mb-5 text-white">
            Conheça <b>SkyZero</b>, seu apresentador de dispersão de Co2
          </p>
        </div>
      </section>
      <section className="flex flex-col items-center gap-5 py-20">
        <h1 className="text-2xl sm:text-3xl font-semibold text-[#079b11] mb-5">Nossos Serviços</h1>
        <ul className="flex flex-col xl:flex-row gap-4 text-center">
          <li className="flex flex-col items-center gap-2 py-2 w-40 sm:w-80 lg:w-96 xl:w-80 2xl:w-96 border-2 rounded-xl border-[#079b11]">
            <FaCalculator size={50} color="079b11" />
            <p className="text-gray-500">Cálculo de Co2 disperso por voo</p>
          </li>
          <li className="flex flex-col items-center gap-2 py-2 w-40 sm:w-80 lg:w-96 xl:w-80 2xl:w-96 border-2 rounded-xl border-[#079b11]">
            <IoIosSave size={50} color="079b11" />
            <p className="text-gray-500">Registros de voos em seu perfil</p>
          </li>
          <li className="flex flex-col items-center gap-2 py-2 w-40 sm:w-80 lg:w-96 xl:w-80 2xl:w-96 border-2 rounded-xl border-[#079b11]">
            <IoPieChartSharp size={50} color="079b11" />
            <p className="text-gray-500">Gráficos de dispersão e diminuições</p>
          </li>
        </ul>
      </section>
    </main>
  )
}
