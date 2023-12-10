import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

export default function Home() {
  return (
    <main className="w-[100vw] h-[100vh] bg-gradient-to-r from-initial-gradient to-end-gradient flex flex-col xl:flex-row gap-3 xl:px-32 xl:py-10">
      <section className="flex flex-col px-10 pt-10 lg:p-0 justify-between md:justify-around w-[100vw] md:w-[60%] lg:w-[40%] h-[70%] md:h-auto">
        <div className="flex gap-3 items-center">
          <Image
            className="lg:w-[63.97px] lg:h-[74px]"
            src="./icon-principal.svg"
            width={32.45}
            height={35}
            alt="logo do Be Happy"
          />
          <p className="text-3xl font-black lg:text-5xl">happy</p>
        </div>
        <h1 className="leading-snug text-5xl w-1/2 md:w-[100%] font-black xl:text-8xl">
          Leve felicidade para o mundo
        </h1>
        <p className="text-base lg:text-2xl font-semibold w-[70%]">
          Visite orfanatos e mude o dia de muitas crianças.
        </p>
      </section>
      <section
        className="lg:bg-kids-kidding bg-left bg-no-repeat bg-contain md:w-[55%] lg:items-end justify-between flex md:flex-col px-10 w-[80%]
      "
      >
        <div className="text-sm xl:text-xl md:py-10">
          <p className="font-extrabold">Barreiras</p>
          <p className="font-semibold">Bahia</p>
        </div>
        <button className="bg-yellow p-3 md:p-5 rounded-3xl mb-10 hover:bg-light-blue hover:text-blue text-dark-yellow transition-all">
          <FaArrowRight />
        </button>
      </section>
    </main>
  );
}
