import React from "react";
import SideBar from "./forForm/SideBar";
import { FormProvider } from "@/contexts/FormContext";
import Form from "@/components/forForm/Form";

type Props = {
  title: string;
  orphToEdit?: object;
};

const GeneralForm = ({ title, orphToEdit }: Props) => {
  return (
    <div className="flex bg-bg-form flex-col">
      <SideBar />
      <section className="w-full flex flex-col gap-4 justify-start items-center py-7 z-0">
        <p className="font-semibold text-title-page text-base">{title}</p>
        <FormProvider>
          <Form />
        </FormProvider>
      </section>
    </div>
  );
};

export default GeneralForm;
