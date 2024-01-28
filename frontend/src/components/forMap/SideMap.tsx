import Image from "next/image";
import React from "react";
import CityState from "./CityState";

const SideMap = () => {
  return (
    <aside
      className="bg-gradient-to-r from-initial-gradient to-end-gradient 
    hidden 
    md:flex md:flex-col md:justify-between
     md:p-12 md:w-[30%] md:h-screen"
    >
      <Image
        src="/icon-principal.svg"
        alt="icone da logo"
        width={64}
        height={72}
      />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl lg:text-5xl font-bold">
          Escolha um orfanato no mapa
        </h1>
        <p className="text-base lg:text-lg lg:w-[70%]">
          Muitas crianças estão esperando a sua visita :){" "}
        </p>
      </div>
      <CityState />
    </aside>
  );
};

export default SideMap;
