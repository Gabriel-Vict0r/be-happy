"use client";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { Fade, Slide } from "react-awesome-reveal";
import Link from "next/link";
import CityState from "@/components/forMap/CityState";
export default function Home() {
  return (
    <main className="w-[100vw] h-[100vh] bg-gradient-to-r from-initial-gradient to-end-gradient flex flex-col md:flex-row gap-3 xl:px-32 xl:py-10">
      <section className="flex flex-col px-10 pt-10 justify-between md:justify-around w-[100vw] md:w-[50%] h-[70%] md:h-auto">
        <Fade>
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
        </Fade>
        <Fade delay={500}>
          <h1 className="leading-snug text-5xl w-1/2 md:w-[100%] font-black xl:text-8xl">
            Leve felicidade para o mundo
          </h1>
        </Fade>
        <Fade delay={700}>
          <p className="text-base lg:text-2xl font-semibold w-[70%]">
            Visite orfanatos e mude o dia de muitas crianças.
          </p>
        </Fade>
      </section>
      <Fade className="w-[50%] h-[100%]" delay={1000}>
        <section
          className="md:bg-kids-kidding bg-left bg-no-repeat md:bg-tablet lg:bg-notebook  bg-left md:w-[100%] h-[100%] md:items-end justify-between flex md:flex-col px-10 w-[80%] md:pt-10
      "
        >
          <Slide direction="right">
            <CityState />
          </Slide>
          <Link
            href="/Map"
            className="bg-yellow p-3 md:p-5 rounded-3xl mb-10 hover:bg-light-blue hover:text-blue text-dark-yellow transition-all"
          >
            <FaArrowRight />
          </Link>
        </section>
      </Fade>
    </main>
  );
}
