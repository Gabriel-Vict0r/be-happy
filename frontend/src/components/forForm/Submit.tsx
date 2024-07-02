import { IInput } from "@/interfaces/IForms";
import React from "react";

type Props = {};

const Submit = (props: IInput) => {
  return (
    <input
      type={props.type}
      value={props.label}
      onClick={props.clickButton}
      className="w-full hover:bg-light-green bg-off-green h-16 rounded-[20px] cursor-pointer text-center transition-colors"
    />
  );
};

export default Submit;
