import Card from "@/components/dashboard/Card";
import SideBarDashboard from "@/components/dashboard/SideBarDashboard";
import { OrphType } from "@/types/All";
import { unstable_cache } from "next/cache";
import dynamic from "next/dynamic";
import React from "react";

type Props = {};

export async function getStaticSideProps() {
  const res = await fetch(`${process.env.URL_API}/get-orphanages`, {
    next: { tags: ["orphanages"], revalidate: 60 },
  });
  const orpahanges = res.json();
  //console.log(orpahanges);
  return orpahanges;
}

const Dashboard = async () => {
  const CardDynamic = dynamic(() => import("@/components/dashboard/Card"), {
    ssr: false,
  });
  const orphanages = unstable_cache(
    async () => await getStaticSideProps(),
    undefined,
    {
      tags: ["orphanages"],
      revalidate: 60,
    }
  );
  //console.log(orphanages);
  return (
    <main className="p-5">
      <div className="flex justify-between flex-col md:flex-row border-b border-border-form p-3">
        <h1 className="text-title font-bold text-2xl">Orfanatos cadastrados</h1>
        <p className="text-title page text-base">
          {orphanages.length} orfanatos cadastrados
        </p>
      </div>
      <section className="py-5 flex flex-col gap-5 lg:flex-row flex-nowrap">
        {/* <Card position={{ lat: -788, lng: 4545 }} /> */}
        {orphanages.map((orph: OrphType) => (
          <CardDynamic
            key={orph.id}
            position={{
              lat: orph.location.latitude,
              lng: orph.location.longitude,
            }}
            orphanage={orph}
          />
        ))}
      </section>
    </main>
  );
};

export default Dashboard;
