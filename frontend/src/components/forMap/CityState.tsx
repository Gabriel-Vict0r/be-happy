import React from "react";
type TCenter = {
  center: boolean;
};
const CityState = ({ center }: TCenter) => {
  return (
    <div className={`text-sm xl:text-xl ${center ? "text-center" : ""}`}>
      <p className="font-extrabold">Barreiras</p>
      <p className="font-semibold">Bahia</p>
    </div>
  );
};

export default CityState;
