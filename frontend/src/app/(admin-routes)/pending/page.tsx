import {
  fetchOrphanages,
  fetchOrphanagesPending,
  revalidateTagAction,
} from "@/app/actions";
import ContainerAdmin from "@/components/admin-area/ContainerAdmin";
import NoOne from "@/components/dashboard/NoOne";
import { OrphType } from "@/types/All";
import { unstable_cache } from "next/cache";
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
  const orphanagesPending: OrphType[] = await fetchOrphanagesPending(
    "get-pending",
    ["orphanages-pending"],
    ["pending"]
  );
  //revalidateTagAction("pending");
  //console.log();
  return (
    <ContainerAdmin
      title="Cadastros pendentes"
      subtitle={` ${orphanagesPending.length}
          ${orphanagesPending.length === 1 ? "orfanato" : "orfanatos"}`}
    >
      {orphanagesPending.length === 0 ? (
        <NoOne />
      ) : (
        orphanagesPending.map((orph: OrphType) => (
          <CardDynamic
            key={orph.id}
            position={{
              lat: orph.location.latitude,
              lng: orph.location.longitude,
            }}
            orphanage={orph}
          />
        ))
      )}
    </ContainerAdmin>
  );
};

export default Pending;
