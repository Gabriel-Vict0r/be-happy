import { IInput } from "@/interfaces/IForms";
import React, { useState } from "react";
import InputHourShift from "./InputHourShift";
import { useFormContext } from "@/contexts/FormContext";
import { IHour } from "@/interfaces/IHour";

type Props = {};

const HourInput = (props: IInput) => {
  const { hours_visitations, setHours_Visitations } = useFormContext();

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const nameField = event.currentTarget.name;
    const time = event.currentTarget.value;

    let updatedHourIni: IHour = { initial_hour: time };
    let updateHourEnd: IHour = { final_hour: time };

    if (nameField === "hour_initial") {
      setHours_Visitations!((hours_visitations) => ({
        ...hours_visitations,
        ...updatedHourIni,
      }));
    }
    if (nameField === "hour_final") {
      setHours_Visitations!((hours_visitations) => ({
        ...hours_visitations,
        ...updateHourEnd,
      }));
    }
    console.log("horario", hours_visitations);
  };
  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="text-title-page font-semibold text-base">
        {props.label}
      </label>
      <div className="flex flex-row justify-between w-full gap-2">
        <InputHourShift
          label="Inicial"
          name="hour_initial"
          value={hours_visitations.initial_hour}
          handleInput={handleInput}
        />
        <InputHourShift
          label="Final"
          name="hour_final"
          value={hours_visitations.final_hour}
          handleInput={handleInput}
        />
      </div>
    </div>
  );
};

export default HourInput;
