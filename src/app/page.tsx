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

    </main>
  )
}
