import React from "react";
import { BtnNext } from "./ButtonNext.style";
import { Text } from "react-native";

type Props = {};

const ButtonNext = ({ ...props }) => (
  <BtnNext {...props}>
    <Text>Próximo</Text>
  </BtnNext>
);

export default ButtonNext;