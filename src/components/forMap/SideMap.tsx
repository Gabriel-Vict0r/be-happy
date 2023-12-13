import Image from "next/image";
import React from "react";
import CityState from "./CityState";

type Props = {};

const SideMap = (props: Props) => {
  return (
    <aside
      className="bg-gradient-to-r from-initial-gradient to-end-gradient flex flex-col justify-between
     p-12 max-w-[30%] h-screen"
    >
      <Image
        src="/icon-principal.svg"
        alt="icone da logo"
        width={64}
        height={72}
      />
      <div className="flex flex-col gap-4">
        <h1 className="text-5xl font-bold">Escolha um orfanato no mapa</h1>
        <p className="text-lg w-[70%]">
          Muitas crianças estão esperando a sua visita :){" "}
        </p>
      </div>
      <CityState />
    </aside>
  );
};

export default SideMap;
