import { fetchOrphanages } from "@/app/actions";
import ContainerAdmin from "@/components/admin-area/ContainerAdmin";
import Card from "@/components/dashboard/Card";
import SideBarDashboard from "@/components/dashboard/SideBarDashboard";
import { OrphType } from "@/types/All";
import { unstable_cache } from "next/cache";
import dynamic from "next/dynamic";
import React from "react";

const Dashboard = async () => {
  const CardDynamic = dynamic(() => import("@/components/dashboard/Card"), {
    ssr: false,
  });
  const orphanages: OrphType[] = await fetchOrphanages(
    "get-orphanages",
    "orphanages"
  );
  //console.log(orphanages);
  return (
    <ContainerAdmin
      title="Orfanatos cadastrados"
      subtitle={` ${orphanages.length}
          ${orphanages.length === 1 ? "orfanato" : "orfanatos"}`}
    >
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
    </ContainerAdmin>
  );
};

export default Dashboard;
