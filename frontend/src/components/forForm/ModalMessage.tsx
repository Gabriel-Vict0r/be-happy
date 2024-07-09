import React from "react";
import Swal, { SweetAlertIcon } from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

type Props = {
  title: string;
  message: string;
  icon: SweetAlertIcon | undefined;
  handleFun?: void;
};

const mySwal = withReactContent(Swal);
const showSwal = (
  title: string,
  message: string,
  icon: SweetAlertIcon | undefined,
  handleFun?: ((inputValue: any) => any) | undefined
) => {
  mySwal.fire({
    title: title,
    text: message,
    icon: icon,
    preConfirm: handleFun,
  });
};
export default showSwal;
