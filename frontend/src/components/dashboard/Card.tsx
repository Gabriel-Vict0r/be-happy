import React from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import LocationMarker from "../forForm/LocationMarker";
import { LatLngExpression } from "leaflet";
import markerIcon from "@/components/markerIcon";

type Props = {
  position: LatLngExpression | undefined;
};

const Card = (props: Props) => {
  const url = process.env.TOKEN_MAP!;

  return (
    <div className="w-full h-full rounded-[20px] relative border-2 border-border-map-form">
      <MapContainer
        center={props.position}
        zoom={17}
        scrollWheelZoom
        style={{ height: "100%", width: "100%", zIndex: 0, borderRadius: 20 }}
      >
        <TileLayer url={url} />
        <Marker
          position={props.position!}
          draggable={false}
          icon={markerIcon}
          interactive={true}
          autoPanOnFocus
        />
      </MapContainer>
      <span className="w-full h-[48px] text-base text-dark-blue absolute bottom-0 bg-bg-btn-map rounded-b-[20px] flex justify-center items-center text-center">
        Arraste o marcador para adicionar a localização
      </span>
    </div>
  );
};

export default Card;
