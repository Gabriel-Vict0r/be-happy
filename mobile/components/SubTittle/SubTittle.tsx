import React from "react";
import { Text } from "react-native";
import { SubTComponent } from "./SubTittle.style";
interface IText {
  subTittle: string;
}
const SubTittle = ({ subTittle }: IText) => {
  return <SubTComponent>{subTittle}</SubTComponent>;
};

export default SubTittle;
