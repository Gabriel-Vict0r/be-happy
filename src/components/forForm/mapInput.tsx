import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import markerIcon from "../markerIcon";

type Props = {};

const mapInput = (props: Props) => {
  const url = process.env.TOKEN_MAP;
  return (
    <div>
      <MapContainer
        center={[-12.13885, -44.988522]}
        zoom={17}
        scrollWheelZoom
        style={{ height: "100%", width: "100%", zIndex: 0 }}
      >
        <TileLayer url={url!} />
        <Marker
          position={[-12.13885, -44.988522]}
          draggable={true}
          icon={markerIcon}
          interactive={true}
          autoPanOnFocus
        >
          <Popup
            keepInView={true}
            position={[-12.13885, -44.988522]}
            className="text-5xl"
          ></Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default mapInput;
