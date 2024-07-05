import FormEdit from "@/components/forForm/FormEdit";
import { FormProvider } from "@/contexts/FormContext";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="flex bg-bg-form flex-col">
      <section className="w-full flex flex-col gap-4 justify-start items-center py-7 z-0">
        <p className="font-semibold text-title-page text-base">
          Editar orfanato
        </p>
        <FormProvider>
          <FormEdit />
        </FormProvider>
      </section>
    </div>
  );
};

export default page;
