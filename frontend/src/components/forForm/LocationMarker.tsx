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
  const { position, setPosition, newPos, setCanSubmit } = useFormContext();
  const isFoundMemo = localStorage.getItem("active");
  //const standard = {lat: 25124, lng: 2503}
  const [marker, setMarker] = useState(position);
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
        const markerPointer: TGetGeo = markerRef.current!;
        if (marker !== null) {
          let latlngPosition: IPosition = {
            lat: markerPointer.getLatLng().lat,
            lng: markerPointer.getLatLng().lng,
          };
          setMarker(latlngPosition);
          //console.log("marker pointer", latlngPosition);
          //console.log("positionmaker", marker);
          //console.log('latlng obj', latlng.lat);
        }
      },
    }),
    [markerRef.current]
  );
  useEffect(() => {
    console.log("estado mudou", newPos);
    if (newPos) {
      setPosition!(marker);
      console.log("nova posicao", position);
      setCanSubmit(true);
    }
  }, [newPos]);
  return (
    <Marker
      position={marker}
      draggable={true}
      eventHandlers={eventHandlers}
      icon={markerIcon}
      //interactive={true}
      ref={markerRef}
    ></Marker>
  );
};

export default LocationMarker;
