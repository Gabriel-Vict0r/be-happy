"use client";
import React, {
  ReactNode,
  useEffect,
  useRef,
  useState,
  useCallback,
  useMemo,
} from "react";
import {
  Marker,
  useMapEvents,
  Popup,
  useMapEvent,
  useMap,
} from "react-leaflet";
import markerIcon from "../markerIcon";
import { LatLng } from "leaflet";
import { useFormContext } from "@/contexts/FormContext";
import { IPosition, IPositionLocal } from "@/interfaces/IForms";

const LocationMarker = () => {
  const { position, setPosition } = useFormContext();
  const [isLocationFound, setIsLocationFound] = useState<boolean>(false);
  const isFoundMemo = localStorage.getItem("active");
  console.log(`condicional inicial ${isLocationFound}`);
  const conditional =
    !position ||
    position.lat === 0 ||
    position.lng === 0 ||
    !localStorage.getItem("active");

  const map = useMap();
  const getPosition = useCallback(() => {
    if (conditional) {
      map.locate().on("locationfound", (e) => {
        const newPosition = e.latlng;
        localStorage.setItem("active", "true");
        //setIsLocationFound(true);
        setPosition!(newPosition);
        map.flyTo(newPosition, map.getZoom());
      });
    }
  }, [isFoundMemo, position]);
  getPosition();
  console.log(map.getBounds());
  console.log(map.getCenter());
  //setPosition!({ lat: 0, lng: 0 });
  return (
    <Marker
      position={position}
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
