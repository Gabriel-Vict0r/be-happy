"use client";
import React from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import LocationMarker from "../forForm/LocationMarker";
import { LatLngExpression } from "leaflet";
import markerIcon from "@/components/markerIcon";
import { OrphType } from "@/types/All";
import { FiEdit3 } from "react-icons/fi";
import { MdOutlineDelete } from "react-icons/md";
import BtnEdit from "../dashboard/BtnEdit";
import Link from "next/link";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import showSwal from "@/components/forForm/ModalMessage";
import { revalidateTag, unstable_cache } from "next/cache";
import { revalidateTagAction } from "@/app/actions";
import { useRouter } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";
type Props = {
  position: LatLngExpression | undefined;
  orphanage: OrphType;
};

const CardPending = (props: Props) => {
  const url = process.env.TOKEN_MAP!;

  return (
    <div className="w-full lg:w-1/2 h-[296px] rounded-[20px] relative border-2 border-border-map-form">
      <MapContainer
        center={props.position}
        zoom={17}
        scrollWheelZoom
        style={{ height: "291px", width: "100%", zIndex: 0, borderRadius: 20 }}
      >
        <TileLayer url={url} />
        <Marker
          position={props.position!}
          draggable={false}
          icon={markerIcon}
          interactive={false}
        />
      </MapContainer>
      <div className="w-full absolute bottom-0 bg-bg-btn-map rounded-b-[20px] flex justify-center items-center flex-col py-2 md:flex-row md:justify-between md:px-5">
        <h2 className="text-base font-bold text-title">
          {props.orphanage.name}
        </h2>
        <div className="flex gap-3">
          <Link
            href={`/acept-orphanage/${props.orphanage.id}`}
            className="p-2 bg-back-background text-blue rounded-xl text-xl hover:bg-yellow transition-colors"
          >
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardPending;
