import { FaCalculator } from "react-icons/fa";
import { IoIosSave } from "react-icons/io";
import { IoPieChartSharp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";
import backgroundImage from "@/assets/images/section1-wpp.jpg"
import fotoAllan from "../assets/images/allan.png";
import fotoCaio from "../assets/images/caio.png";
import fotoLevi from "../assets/images/levi.png";
import Image from "next/image"
import Link from "next/link";

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

      <div className="bg-gray-200 h-1"></div>

      <section id="integrantes" className="flex flex-col items-center gap-5 py-20">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-semibold text-[#079b11] mb-3">Integrantes</h1>
          <p className="text-gray-500 text-center mb-5">Idealizadores da solução <b>SkyZero</b>.<br />Alunos da FIAP, turma 1TDSPX.</p>
        </div>
        <div className="flex flex-col items-center gap-10 lg:flex-row xl:gap-12 2xl:gap-16">
          {[{ name: "Allan Brito", rm: "RM558948", img: fotoAllan, github: "https://github.com/Allanbm100" },
          { name: "Caio Liang", rm: "RM558868", img: fotoCaio, github: "https://github.com/CaioLiang" },
          { name: "Levi Magni", rm: "RM98276", img: fotoLevi, github: "https://github.com/levmn" }].map((member, index) => (
            <article key={index} className="flex flex-col items-center gap-2">
              <Image src={member.img} alt={`Foto do ${member.name}`} className="border-4 border-[#079b11] rounded-full size-48 sm:size-60" />
              <div className="flex flex-col items-center">
                <h3 className="text-xl font-bold text-[#079b11]">{member.name}</h3>
                <p className="text-base font-normal text-gray-500">{member.rm}</p>
              </div>
              <Link href={member.github} target="_blank" rel="noopener noreferrer">
                <FaGithub color="#079b11" size="25px" />
              </Link>
            </article>
          ))}
        </div>
      </section>
      <section>
        <div>
          <h1>
            Section 4
          </h1>
        </div>
      </section>

    </main>
  )
}
