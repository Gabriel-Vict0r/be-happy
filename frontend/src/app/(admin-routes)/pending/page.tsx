import { fetchOrphanages } from "@/app/actions";
import ContainerAdmin from "@/components/admin-area/ContainerAdmin";
import { OrphType } from "@/types/All";
import dynamic from "next/dynamic";
import React from "react";

type Props = {};

const Pending = async (props: Props) => {
  const CardDynamic = dynamic(
    () => import("@/components/pending/CardPending"),
    {
      ssr: false,
    }
  );
  const orphanages: OrphType[] = await fetchOrphanages(
    "get-pending",
    "pending"
  );
  console.log(orphanages);
  return (
    <ContainerAdmin
      title="Cadastros pendentes"
      subtitle={` ${orphanages.length}
          ${orphanages.length === 1 ? "orfanato" : "orfanatos"}`}
    >
      {orphanages.map((orph) => (
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

export default Pending;
