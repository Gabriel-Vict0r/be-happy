import React, { useContext } from "react";
import { IInput } from "@/interfaces/IForms";
import inputMask, { MaskTypes } from "../../utils/inputMask";

//a type was created for join the props from a html input and a mask input
type TInputProps = IInput & {
  maskType?: MaskTypes;
};

const Input = (props: TInputProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (props.maskType) {
      const mask = inputMask[props.maskType];

      event.currentTarget.value = mask(event);
    }
    if (typeof props.handleInput === "function") {
      props.handleInput(event);
    }
  };
  return (
    <div className="flex flex-col gap-2">
      <label className="text-title-page font-semibold text-base">
        {props.label}
      </label>
      <input
        type={props.type}
        name={props.name}
        id={props.name}
        className="bg-bg-btn-map h-14 border-border-form border-2 rounded-[20px] text-text p-4 font-semibold outline-none"
        //pattern={props.type == "phone" ? "[0-9]{3}-[0-9]{2}-[0-9]{3}" : ""}
        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
        maxLength={props.maxLength}
        value={props.value}
        onChange={handleChange}
      />
    </div>
  );
};

export default Input;
