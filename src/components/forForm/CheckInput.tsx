import { IInput } from "@/interfaces/IForms";
import React from "react";

type Props = {};

const CheckInput = (props: IInput) => {
  return (
    <div className="flex justify-between">
      <label htmlFor="hour" className="text-title-page font-semibold text-base">
        {props.label}
      </label>
      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" value={props.value} className="sr-only peer" />
        <div
          className="w-11 h-6 bg-bg-btn-map border-border-form border-2
         peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-light-green rounded-full peer-checked:after:translate-x-full
         after:bg-title-page
         rtl:peer-checked:after:-translate-x-full peer-checked:after:border-light-green after:content-[''] after:absolute after:top-[2px] after:start-[2px]
         peer-checked:after:bg-white after:border-gray after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-light-green"
        ></div>
      </label>
    </div>
  );
};

export default CheckInput;
