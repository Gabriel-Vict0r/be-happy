import WrapPage from "@/components/forLogin/WrapPage";
import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

type Props = {};

const page = async (props: Props) => {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/dashboard");
  }
  return <WrapPage />;
};

export default page;
