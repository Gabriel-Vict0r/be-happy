import MapComponent from "@/components/forMap/MapComponent";
import SideMap from "@/components/forMap/SideMap";
import dynamic from "next/dynamic";
import React from "react";
import Link from "next/link";
import { IoIosAdd } from "react-icons/io";
import { IoIosAddCircle } from "react-icons/io";
const PageMap = () => {
  const MapWithNoSSR = dynamic(
    () => import("@/components/forMap/MapComponent"),
    {
      ssr: false,
    }
  );
  return (
    <main className="flex flex-row w-full h-full relative">
      <SideMap />
      <MapWithNoSSR />
    </main>
  );
};

export default PageMap;
