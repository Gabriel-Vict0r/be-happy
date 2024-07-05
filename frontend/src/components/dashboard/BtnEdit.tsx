import { button } from "@material-tailwind/react";
import React from "react";

type Props = {
  event: React.MouseEventHandler<HTMLButtonElement>;
  icon: React.ReactNode;
};

const BtnEdit = (props: Props) => {
  return (
    <button
      type="button"
      onClick={props.event}
      className="p-2 bg-back-background text-blue rounded-xl text-2xl hover:bg-yellow transition-colors"
    >
      {props.icon}
    </button>
  );
};

export default BtnEdit;
