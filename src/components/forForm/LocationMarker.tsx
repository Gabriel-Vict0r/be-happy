import React, { useState } from "react";
import { MapContainer, Marker, useMapEvents, Popup } from "react-leaflet";
import { LatLng } from "leaflet-geosearch/dist/providers/provider.js";
import { Icon, DivIcon } from "leaflet";
import markerIcon from "../markerIcon";
import { useFormContext } from "@/contexts/FormContext";

interface ILocation {
  position: LatLng;
  popUpText: string;
}
const LocationMarker = () => {
  const { position, setPosition } = useFormContext();

  //const [position, setPosition] = useState<LatLng>();
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
      position={[position.lat, position.lng]}
      draggable={true}
      //icon={markerIcon}
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
