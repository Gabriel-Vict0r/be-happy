"use client";
import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import L from "leaflet";
import Link from "next/link";
import { IoIosAdd } from "react-icons/io";
import { IoIosAddCircle } from "react-icons/io";

const MapComponent = () => {
  const url = `https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=sk.eyJ1Ijoicm90Y2l2MDEwMTAxIiwiYSI6ImNscTV0MGNldzBrYjAybG14eXI5cnM5ZHYifQ.uh9eBIYmXQIuLjOtZqLpwA`;

  const markerIcon = L.icon({
    iconUrl: "/Location.svg",
    iconSize: new L.Point(60, 65),
  });
  return (
    <div className="w-[70%]">
      <MapContainer
        center={[-12.13885, -44.988522]}
        zoom={17}
        scrollWheelZoom
        style={{ height: "100%", width: "100%", zIndex: 0 }}
      >
        <TileLayer url={url} />
        <Marker
          position={[-12.13885, -44.988522]}
          draggable={true}
          icon={markerIcon}
          interactive={false}
        >
          <Popup
            keepInView={true}
            position={[-12.13885, -44.988522]}
            className="text-5xl"
          ></Popup>
        </Marker>
      </MapContainer>
      <Link
        href="/"
        className="absolute bottom-10 right-10 rounded-[20px] p-1 text-white text-5xl bg-blue z-10"
      >
        <IoIosAdd className="" />
      </Link>
    </div>
  );
};

export default MapComponent;
