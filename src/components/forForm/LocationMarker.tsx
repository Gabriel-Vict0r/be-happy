"use client";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import { Marker, useMapEvents, Popup } from "react-leaflet";
import markerIcon from "../markerIcon";
import { LatLng } from "leaflet";
import { useFormContext } from "@/contexts/FormContext";
import { IPosition } from "@/interfaces/IForms";

interface IPositionMarker {
  position: IPosition;
}
const LocationMarker = () => {
  const { position, setPosition } = useFormContext();

  const markerRef = useRef();

  const updatePosition = () => {
    const marker: any = markerRef.current;
    if (marker !== null) {
      const newPosition = { ...marker.leafletElement.getLatLng() };
      setPosition!(newPosition);
      console.log(position);
    }
  };
  return (
    <Marker
      position={position!}
      draggable={true}
      icon={markerIcon}
      interactive={true}
      autoPanOnFocus
    >
      <Popup keepInView={true} position={position} className="text-5xl">
        Localização
      </Popup>
    </Marker>
  );
};

export default LocationMarker;