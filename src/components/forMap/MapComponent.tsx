"use client";
import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import L from "leaflet";
const MapComponent = () => {
  const url = `https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=sk.eyJ1Ijoicm90Y2l2MDEwMTAxIiwiYSI6ImNscTV0MGNldzBrYjAybG14eXI5cnM5ZHYifQ.uh9eBIYmXQIuLjOtZqLpwA`;

  const markerIcon = L.icon({
    iconUrl: "/icon-principal.svg",
    iconSize: new L.Point(60, 65),
  });
  return (
    <div className="w-[70%]">
      <MapContainer
        center={[-12.13885, -44.988522]}
        zoom={17}
        scrollWheelZoom
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer url={url} />
        <Marker
          position={[-12.13885, -44.988522]}
          draggable={true}
          icon={markerIcon}
          interactive={true}
        >
          <Popup
            keepInView={true}
            position={[-12.13885, -44.988522]}
            className="text-5xl"
          >
            <div>
              
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
