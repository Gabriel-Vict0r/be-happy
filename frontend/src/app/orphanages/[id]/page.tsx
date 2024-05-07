import SideBar from "@/components/forForm/SideBar";
import MapOrphanage from "@/components/forMap/MapOrphanage";
import Image from "next/image";
import React from "react";

async function getStaticSideProps(context: any) {
  const id = context.params?.id;
  const orphResponse = await fetch(
    "https://https://be-happy-beta.vercel.app/orphanages"
  );
  const orph = await orphResponse.json();

  return {
    props: {
      orph,
    },
  };
}
export async function generateStaticParams() {
  const orphResponse = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  const orph = await orphResponse.json();

  return orph.map((orph: any) => ({
    id: String(orph.id),
  }));
}

async function fetchOrphanage(id: string) {
  const orphResponse = await fetch(
    `https://be-happy-beta.vercel.app/getOrphanage/${id}`
  );

  console.log("Fetching orphanage response", id);

  return orphResponse.json();
}
  export default async function PageOrphanage({ params, searchParams}: any) {
    const {id} = params
    const orph = await fetchOrphanage(id)
    return <main className="flex bg-bg-form flex-col">
      <SideBar />
      <section className="w-full flex flex-col gap-4 justify-start items-center py-7 z-0">
      <p className="text-title-page">Orfanato</p>
      <div className="flex flex-col items-center gap-3 rounded-2xl bg-white w-full md:w-[708px]">
        <Image src='/icon-principal.svg' alt='teste' width={100} height={100}/>
        <h1 className="text-title font-bold text-4xl">{orph.name}</h1>
        <p className="text-text font-semibold text-base">{orph.about}</p>
        <MapOrphanage latitude={orph.latitude} longitude={orph.latitude}/>
      </div>
      </section>
    </main>;
  }