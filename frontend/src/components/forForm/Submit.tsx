import { IInput } from "@/interfaces/IForms";
import React from "react";

type Props = {
  reject?: boolean;
};

const Submit = (props: IInput) => {
  return (
    <input
      type={props.type}
      value={props.label}
      onClick={props.clickButton}
      className={`w-full  h-16 rounded-[20px] cursor-pointer text-center transition-colors 
        ${
          !props.reject
            ? "hover:bg-light-green bg-off-green"
            : "bg-red-box hover:bg-red-box-dark"
        }
        `}
    />
  );
};

export default Submit;
