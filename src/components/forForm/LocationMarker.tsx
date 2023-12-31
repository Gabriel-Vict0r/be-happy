import React, { useState } from "react";
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
  //const [position, setPosition] = useState<IPosition>();
  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      setPosition!(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });
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
