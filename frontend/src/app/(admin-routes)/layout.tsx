import React from "react";
import { motion } from "framer-motion";
import SideBarDashboard from "@/components/dashboard/SideBarDashboard";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect, useRouter } from "next/navigation";

const PrivateLayout = async ({ children }: { children: React.ReactNode }) => {
  const section = await getServerSession(authOptions);
  if (!section) {
    redirect("/login");
  }
  return (
    <main>
      <SideBarDashboard />
      <section>{children}</section>
    </main>
  );
};
export default PrivateLayout;
