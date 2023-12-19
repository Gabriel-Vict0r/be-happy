import React from "react";
import { IInput } from "@/interfaces/IForms";

const TextArea = (props: IInput) => {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor="name"
        className="text-title-page font-semibold text-base flex gap-7 items-center"
      >
        {props.label}
        <span className="font-normal text-sm">
          Máximo de até 300 caracteres
        </span>
      </label>
      <textarea
        name={props.name}
        id={props.name}
        rows={3}
        className="bg-bg-btn-map border-border-form border-2 rounded-[20px] text-text p-4 font-semibold outline-none"
      />
    </div>
  );
};

export default TextArea;
