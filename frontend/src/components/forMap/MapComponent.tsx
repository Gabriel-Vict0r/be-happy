"use client";
import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import markerIcon from "@/components/markerIcon";
import Link from "next/link";
import { IoIosAdd } from "react-icons/io";

const MapComponent = () => {
  interface IOrphanage {
    id: string;
    name: string;
    about: string;
    latitude: number;
    longitude: number;
    instructions: string;
    acept_weekend: boolean;
    phone: string;
  }
  const objIni: IOrphanage = {
    id: "1",
    name: "instituto",
    about: "testes",
    latitude: 2221,
    longitude: 2342,
    instructions: "sdfsdf",
    acept_weekend: false,
    phone: "string",
  };
  const url = process.env.TOKEN_MAP;
  const [orphanages, setOrphanages] = useState<IOrphanage[]>([]);
  useEffect(() => {
    const fetchData = () => {
      try {
        const data = fetch("https://be-happy-beta.vercel.app/orphanages")
          .then((response) => response.json())
          .then((data) => setOrphanages(data));
        console.log("ao setar", orphanages);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  console.log("orfanatos", orphanages);
  return (
    <div className="w-full h-screen md:w-[70%]">
      <MapContainer
        center={[-12.1389421537356, -44.9816716400635]}
        zoom={30}
        scrollWheelZoom
        style={{ height: "100%", width: "100%", zIndex: 0 }}
      >
        <TileLayer url={url!} />
        {orphanages.map((orphanage) => (
          <Marker
            position={[orphanage.longitude, orphanage.latitude]}
            draggable={false}
            icon={markerIcon}
            interactive={true}
            key={orphanage.id}
            autoPanOnFocus
          >
            <Popup
              key={orphanage.id}
              keepInView={true}
              position={[orphanage.latitude, orphanage.longitude]}
              className="text-5xl"
              autoPan={true}
            >
              <span>{orphanage.name}</span>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      <Link
        href="/Form"
        className="absolute bottom-10 right-10 rounded-[20px] p-1 text-white text-5xl bg-blue z-10"
      >
        <IoIosAdd className="" />
      </Link>
    </div>
  );
};

export default MapComponent;

// export async function getServerSideProps() {
//   const response = await fetch("https://be-happy-beta.vercel.app/orphanages");

//   const orhphanages = response.json();
//   console.log(orhphanages);
//   return {
//     props: {
//       orhphanages,
//     },
//   };
// }
