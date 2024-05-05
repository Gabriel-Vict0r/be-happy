import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const PageSubmited = (props: Props) => {
  return (
    <main className="bg-green-normal flex justify-center items-center flex-col py-10 h-[100vh] gap-5 px-10 lg:flex-row-reverse lg:gap-10 lg:px-28 xl:px-20 xl:gap-20">
      <Image
        src="/eba.svg"
        width={200}
        height={290}
        alt="ilustração happy"
        className="md:w-[200px] xl:w-[300px]"
      />
      <section className="text-center flex flex-col justify-between items-center gap-5 xl:gap-10 xl:w-[50%]">
        <h1 className="font-extrabold text-5xl md:text-5xl xl:text-7xl">
          Ebaaa!
        </h1>
        <p className="font-semibold md:text-lg xl:text-2xl">
          O cadastro deu certo e foi enviado ao administrador para ser aprovado.
          Agora é só esperar :)
        </p>
        <Link
          href="/Map"
          className="bg-green-btn-submit w-[60%] py-2 rounded-xl md:text-lg md:w-[40%] xl:text-2xl font-extrabold hover:bg-green-btn-submit-h transition-all"
        >
          Voltar para o mapa
        </Link>
      </section>
    </main>
  );
};

export default PageSubmited;
