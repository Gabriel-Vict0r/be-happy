"use client";
import React, { ReactNode, useEffect, useRef, useState } from "react";
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
  const { setPosition } = useFormContext();
  const [positionLocal, setPositionLocal] = useState<IPosition>({
    lat: 0,
    lng: 0,
  });
  const [isLocationFound, setIsLocationFound] = useState<boolean>(false);
  const map = useMap();
  useEffect(() => {
    const handleLocation = (e: IPositionLocal) => {
      const newPosition = e.latlng;
      console.log(newPosition);
      if (
        !positionLocal ||
        newPosition.lat !== positionLocal.lat ||
        newPosition.lng !== positionLocal.lng ||
        !isLocationFound
      ) {
        setPositionLocal(newPosition);
        setIsLocationFound(true);
        //setPosition(newPosition);
        moveToGlobaPosition(newPosition);
        //map.flyTo(newPosition, map.getZoom());
        map.flyTo(newPosition);
      }
    };
    map.locate().on("locationfound", handleLocation);
    console.log("position do estado local", positionLocal);

    return () => {
      map.off("locationfound", handleLocation);
    };
  }, [isLocationFound, positionLocal]);

  function moveToGlobaPosition(value: IPosition): void {
    isLocationFound ? setPosition!(value) : null;
  }
  return (
    <Marker
      position={positionLocal!}
      draggable={true}
      icon={markerIcon}
      interactive={true}
      autoPanOnFocus
    >
      <Popup keepInView={true} position={positionLocal} className="text-5xl">
        Localização
      </Popup>
    </Marker>
  );
};

export default LocationMarker;
