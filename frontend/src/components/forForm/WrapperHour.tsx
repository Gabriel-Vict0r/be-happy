import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const WrapperHour = ({ children }: Props) => {
  return (
    <>
      <p className="text-title-page font-semibold text-base">
        Horário das visitas
      </p>
      <div className="flex flex-row justify-between w-full gap-2">
        {children}
      </div>
    </>
  );
};

export default WrapperHour;
