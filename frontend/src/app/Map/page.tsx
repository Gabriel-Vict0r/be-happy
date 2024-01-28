import SideMap from "@/components/forMap/SideMap";
import dynamic from "next/dynamic";
import React from "react";

const PageMap = () => {
  const MapWithNoSSR = dynamic(
    () => import("@/components/forMap/MapComponent"),
    {
      ssr: false,
    }
  );
  return (
    <main className="flex flex-row w-full h-full">
      <SideMap />
      <MapWithNoSSR />
    </main>
  );
};

export default PageMap;
