import { IInput } from "@/interfaces/IForms";
import React from "react";

type Props = {};

const Submit = (props: IInput) => {
  return (
    <input
      type={props.type}
      value={props.label}
      className="w-full bg-off-green h-16 rounded-[20px] cursor-pointer"
    />
  );
};

export default Submit;
