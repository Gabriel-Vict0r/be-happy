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
  MarkerProps,
} from "react-leaflet";
import markerIcon from "../markerIcon";
import {
  Evented,
  LatLng,
  LeafletEventHandlerFnMap,
  MarkerOptions,
} from "leaflet";
import { useFormContext } from "@/contexts/FormContext";
import { IPosition, IPositionLocal } from "@/interfaces/IForms";

const LocationMarker = () => {
  const { position, setPosition, newPos, setnewPos } = useFormContext();
  const isFoundMemo = localStorage.getItem("active");
  const [positionMarker, setPositionMarker] = useState(position);
  const markerRef = useRef(null);
  //console.log(`condicional inicial ${isLocationFound}`);
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
  type TGetGeo = {
    getLatLng(): LatLng;
  };
  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker: TGetGeo = markerRef.current!;
        if (marker != null) {
          setPositionMarker(marker.getLatLng());
          console.log(marker.getLatLng());
        }
      },
    }),
    []
  );
  useEffect(() => {
    setPosition!(positionMarker);
    //console.log("position marker", positionMarker, "nova posicao", position);
  }, [newPos]);
  return (
    <Marker
      position={positionMarker}
      draggable={true}
      eventHandlers={eventHandlers}
      icon={markerIcon}
      interactive={true}
      autoPanOnFocus
      ref={markerRef}
    >
      <Popup keepInView={true} position={position} className="text-5xl">
        Localização
      </Popup>
    </Marker>
  );
};

export default LocationMarker;
