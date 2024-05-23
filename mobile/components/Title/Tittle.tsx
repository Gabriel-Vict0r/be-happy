import React from "react";
import { TittleComponent } from "./Tittle.style";
interface IText {
  tittle: string;
}
const Tittle = ({ tittle }: IText) => {
  return <TittleComponent>{tittle}</TittleComponent>;
};

export default Tittle;
