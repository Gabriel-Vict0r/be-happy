import React from "react";

type Props = {
  error: string | undefined;
};

const Error = ({ error }: Props) => {
  return <p className="text-red-error text-base">{error}</p>;
};

export default Error;
