import { IInput } from "@/interfaces/IForms";
import React from "react";

type Props = {};

const InputHourShift = (props: IInput) => {
  return (
    <div className="flex flex-col w-1/2">
      <label className="text-title-page font-semibold text-base w-full indent-3">
        {props.label}
      </label>
      <input
        type="time"
        name={props.name}
        id={props.name}
        className="bg-bg-btn-map h-14 border-border-form border-2 rounded-[20px] text-text p-4 font-semibold outline-none w-100"
        value={props.value}
        onChange={props.handleInput}
      />
    </div>
  );
};

export default InputHourShift;
