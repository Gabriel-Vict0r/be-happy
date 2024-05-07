"use client";
import React, { useEffect, useMemo } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { useFormContext } from "@/contexts/FormContext";

import { IPosition } from "@/interfaces/IForms";
import markerIcon from "../markerIcon";

interface LatLng { 
    latitude: number;
    longitude: number;
}
const MapOrphanage = ({latitude, longitude}: LatLng) => {
  const url = process.env.TOKEN_MAP!;
  return (
    <div className="w-full h-full rounded-[20px] relative border-2 border-border-map-form">
      <MapContainer
        center={[latitude, longitude]}
        zoom={17}
        scrollWheelZoom
        style={{ height: "100%", width: "100%", zIndex: 0, borderRadius: 20 }}
      >
        <TileLayer url={url} />
        <Marker
      position={[latitude, longitude]}
      draggable={false}
      icon={markerIcon}
      interactive={true}
      autoPanOnFocus
    >
      <Popup keepInView={true} position={[latitude, longitude]} className="text-5xl">
        Localização
      </Popup>
    </Marker>
      </MapContainer>
      <span className="w-full h-[48px] text-base text-dark-blue absolute bottom-0 bg-bg-btn-map rounded-b-[20px] flex justify-center items-center text-center">
        Arraste o marcador para adicionar a localização
      </span>
    </div>
  );
};

export default MapOrphanage
