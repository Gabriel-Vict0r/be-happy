import Image from "next/image";
import React from "react";

type Props = {};

const NoOne = (props: Props) => {
  return (
    <div className="w-full flex justify-center items-center flex-col h-[70vh]">
      <Image
        src="/void-illustration.svg"
        alt="sem orfanatos"
        width={78.22}
        height={88}
      />
      <p className="text-title-page">Nenhum no momento</p>
    </div>
  );
};

export default NoOne;
