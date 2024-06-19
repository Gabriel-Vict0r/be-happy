"use client";
import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import markerIcon from "@/components/markerIcon";
import Link from "next/link";
import { IoIosAdd } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";

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
        const data = fetch("https://be-happy-api.vercel.app/orphanages")
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
    <div className="w-full h-screen lg:w-[70%]">
      <MapContainer
        center={[-12.1482, -44.9925]}
        zoom={14}
        scrollWheelZoom
        style={{ height: "100%", width: "100%", zIndex: 0 }}
      >
        <TileLayer url={url!} />
        {orphanages.map((orphanage) => (
          <Marker
            position={[orphanage.latitude, orphanage.longitude]}
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
              className="h-[64px] rounded-2xl text-base mw-[244px]"
              autoPan={true}
            >
              <span className="text-dark-blue flex gap-3 items-center">
                {orphanage.name}
                <Link
                  href={`/orphanages/${orphanage.id}`}
                  className="bg-blue p-2 rounded-xl"
                >
                  <FaArrowRight className="text-white" />
                </Link>
              </span>
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
