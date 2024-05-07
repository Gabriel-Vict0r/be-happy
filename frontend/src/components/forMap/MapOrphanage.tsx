"use client";
import React, { useEffect, useMemo } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { useFormContext } from "@/contexts/FormContext";

import { IPosition } from "@/interfaces/IForms";
import markerIcon from "../markerIcon";
import dynamic from "next/dynamic";

interface LatLng { 
    latitude: number;
    longitude: number;
}
const MapOrphanage = ({latitude, longitude}: LatLng) => {
  const url = process.env.TOKEN_MAP!;
  const LazyMap = dynamic(async () => (await import('react-leaflet')).MapContainer)
  const LazyMarker = dynamic(async () => (await import('react-leaflet')).Marker)
  const LazyTileLayer = dynamic(async () => (await import('react-leaflet')).TileLayer)
  return (
    <div className="w-full h-full rounded-[20px] relative border-2 border-border-map-form">
      <LazyMap
        center={[latitude, longitude]}
        zoom={17}
        scrollWheelZoom
        style={{ height: "100%", width: "100%", zIndex: 0, borderRadius: 20 }}
      >
        <LazyTileLayer url={url} />
        <LazyMarker
      position={[latitude, longitude]}
      draggable={false}
      icon={markerIcon}
      interactive={true}
      autoPanOnFocus
    >
      <Popup keepInView={true} position={[latitude, longitude]} className="text-5xl">
        Localização
      </Popup>
    </LazyMarker>
      </LazyMap>
      <span className="w-full h-[48px] text-base text-dark-blue absolute bottom-0 bg-bg-btn-map rounded-b-[20px] flex justify-center items-center text-center">
        Arraste o marcador para adicionar a localização
      </span>
    </div>
  );
};

export default MapOrphanage