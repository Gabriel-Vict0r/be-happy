import React from "react";
import { ISubTitle } from "@/interfaces/IForms";

const SubTitle: React.FC<ISubTitle> = ({ subTitle }) => {
  return (
    <h3 className="text-title text-2xl md:text-3xl font-bold border-b-2 py-3">
      {subTitle}
    </h3>
  );
};

export default SubTitle;
