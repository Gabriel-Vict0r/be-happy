import { useFormContext } from "@/contexts/FormContext";
import React, { useEffect } from "react";
import { useMap } from "react-leaflet";

const GetLocation = () => {
  // const { position, setPosition } = useFormContext();
  // useEffect(() => {
  //   if ("geolocation" in navigator) {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       setPosition!({
  //         lat: position.coords.latitude,
  //         lng: position.coords.longitude,
  //       });
  //     });
  //   } else {
  //     console.log("canot get the geolocation");
  //   }
  // }, []);
  return null;
};

export default GetLocation;
