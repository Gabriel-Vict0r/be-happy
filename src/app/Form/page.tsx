import Form from "@/components/forForm/Form";
import SideBar from "@/components/forForm/SideBar";
import { FormProvider } from "@/contexts/FormContext";
import React from "react";

type Props = {};

const PageForm = (props: Props) => {
  return (
    <div className="flex bg-bg-form flex-col">
      <SideBar />
      <section className="w-full flex flex-col gap-4 justify-start items-center py-7 z-0">
        <p className="font-semibold text-title-page text-base">
          Adicione um orfanato
        </p>
        <FormProvider>
          <Form />
        </FormProvider>
      </section>
    </div>
  );
};

export default PageForm;
