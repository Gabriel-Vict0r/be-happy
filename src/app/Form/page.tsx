import Form from "@/components/forForm/Form";
import SideBar from "@/components/forForm/SideBar";
import React from "react";

type Props = {};

const PageForm = (props: Props) => {
  return (
    <div className="flex bg-bg-form">
      <SideBar />
      <section className="w-full flex flex-col justify-start items-center py-7">
        <p className="font-semibold text-title-page text-base">
          Adicione um orfanato
        </p>
        <Form />
      </section>
    </div>
  );
};

export default PageForm;
