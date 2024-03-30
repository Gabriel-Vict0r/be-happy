import React from "react";
import { IInput } from "@/interfaces/IForms";
import { IoIosAdd } from "react-icons/io";
import Error from "./Error";

const InputImage = (props: IInput) => {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor="imagens"
        className="text-title-page font-semibold text-base"
      >
        {props.label}
      </label>
      <div className="w-full h-full">
        <label
          htmlFor="imagens"
          className="bg-bg-btn-map w-24 h-24 border-2 rounded-[20px] flex justify-center items-center border-dashed text-blue text-4xl cursor-pointer"
        >
          <IoIosAdd className="" />
        </label>
        <input
          type={props.type}
          name="imagens"
          id="imagens"
          className="hidden"
          //pattern={props.type == "phone" ? "[0-9]{3}-[0-9]{2}-[0-9]{3}" : ""}
          accept="image/*"
          multiple
          onChange={props.handleInput}
        />
      </div>
      {props.error && <Error error={props.error} />}
    </div>
  );
};

export default InputImage;
