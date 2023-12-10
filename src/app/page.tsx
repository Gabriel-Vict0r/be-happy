import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

export default function Home() {
  return (
    <main className="w-[100vw] h-[100vh] bg-gradient-to-r from-initial-gradient to-end-gradient flex gap-3 px-32 py-10">
      <section className="flex flex-col justify-around w-[40%]">
        <div className="flex gap-3 items-center">
          <Image
            src="./icon-principal.svg"
            width={63.97}
            height={74}
            alt="logo"
          />
          <p className="font-black text-5xl">happy</p>
        </div>
        <h1 className="font-black text-8xl">Leve felicidade para o mundo</h1>
        <p className="text-2xl font-semibold w-[60%]">
          Visite orfanatos e mude o dia de muitas crianças.
        </p>
      </section>
      <section
        className="bg-kids-kidding bg-left bg-no-repeat bg-contain w-[55%] items-end justify-between flex flex-col
      "
      >
        <div className="text-xl py-10">
          <p className="font-extrabold">Barreiras</p>
          <p className="font-semibold">Bahia</p>
        </div>
        <button className="bg-yellow p-5 rounded-3xl mb-10 hover:bg-light-blue hover:text-blue text-dark-yellow transition-all">
          <FaArrowRight/>
        </button>
      </section>
    </main>
  );
}
