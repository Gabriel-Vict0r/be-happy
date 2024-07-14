import FormEdit from "@/components/forForm/FormEdit";
import FormPending from "@/components/forForm/FormPending";
import { FormProvider } from "@/contexts/FormContext";
import { IOrphonage } from "@/types/All";
import React from "react";

export async function generateStaticParams() {
  const orphResponse = await fetch(`${process.env.URL_API}/get-orphanages`);

  const orph: Array<IOrphonage> = await orphResponse.json();

  return orph.map((orph) => ({
    id: String(orph.id),
  }));
}

export async function getStaticSideProps(id: number) {
  const orphanageEdit = await fetch(
    `${process.env.URL_API}/get-orphanage/${id}`,
    { next: { revalidate: 120 } }
  );
  const orphanage = orphanageEdit.json();

  return orphanage;
}

const AceptOrphanage = async ({ params }: { params: { id: number } }) => {
  const { id } = params;
  const orphEdit = await getStaticSideProps(id);
  return (
    <div className="flex bg-bg-form flex-col">
      <section className="w-full flex flex-col gap-4 justify-start items-center py-7 z-0">
        <p className="font-semibold text-title-page text-base">
          Editar orfanato
        </p>
        <FormProvider>
          <FormPending orphanage={orphEdit} />
        </FormProvider>
      </section>
    </div>
  );
};

export default AceptOrphanage;
