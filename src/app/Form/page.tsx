import SideBar from "@/components/forForm/SideBar";
import React from "react";

type Props = {};

const Form = (props: Props) => {
  return (
    <div className="flex bg-bg-form">
      <SideBar />
      <section className="w-full flex justify-center py-7">
        <p className="font-semibold text-title-page text-base">
          Adicione um orfanato
        </p>
      </section>
    </div>
  );
};

export default Form;
