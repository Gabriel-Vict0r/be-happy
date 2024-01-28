"use client";
import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import markerIcon from "@/components/markerIcon";
import Link from "next/link";
import { IoIosAdd } from "react-icons/io";

const MapComponent = () => {
  const url = process.env.TOKEN_MAP;
  return (
    <div className="w-full h-screen md:w-[70%]">
      <MapContainer
        center={[-12.13885, -44.988522]}
        zoom={17}
        scrollWheelZoom
        style={{ height: "100%", width: "100%", zIndex: 0 }}
      >
        <TileLayer url={url!} />
        <Marker
          position={[-12.13885, -44.988522]}
          draggable={true}
          icon={markerIcon}
          interactive={true}
          autoPanOnFocus
        >
          <Popup
            keepInView={true}
            position={[-12.13885, -44.988522]}
            className="text-5xl"
          ></Popup>
        </Marker>
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
