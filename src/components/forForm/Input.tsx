import React from "react";
import { IInput } from "@/interfaces/IForms";

const Input = (props: IInput) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="name" className="text-title-page font-semibold text-base">
        {props.label}
      </label>
      <input
        type={props.type}
        name={props.name}
        id={props.name}
        className="bg-bg-btn-map h-14 border-border-form border-2 rounded-[20px] text-text p-4 font-semibold outline-none"
      />
    </div>
  );
};

export default Input;
