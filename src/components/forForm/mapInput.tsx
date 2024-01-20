"use client";
import React, { useEffect } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import LocationMarker from "./LocationMarker";
import { useFormContext } from "@/contexts/FormContext";
import GetLocation from "./GetLocation";
import { IPosition } from "@/interfaces/IForms";

const MapInput = () => {
  const { position, setPosition } = useFormContext();
  const url = process.env.TOKEN_MAP!;
  console.log("position do context", position);
  return (
    <div className="w-full h-full rounded-[20px] relative border-2 border-border-map-form">
      <MapContainer
        center={position}
        zoom={17}
        scrollWheelZoom
        style={{ height: "100%", width: "100%", zIndex: 0, borderRadius: 20 }}
      >
        <TileLayer url={url} />
        {/* <GetLocation /> */}
        <LocationMarker />
      </MapContainer>
      <span className="w-full h-[48px] text-base text-dark-blue absolute bottom-0 bg-bg-btn-map rounded-b-[20px] flex justify-center items-center text-center">
        Arraste o marcador para adicionar a localização
      </span>
    </div>
  );
};

export default MapInput;
