"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { FaPowerOff } from "react-icons/fa6";
import IconSideBar from "./IconSideBar";
import { IoAlertCircleOutline } from "react-icons/io5";
type Props = {};

const SideBarDashboard = (props: Props) => {
  async function logOut() {}
  return (
    <aside className="bg-gradient-to-r from-initial-gradient to-end-gradient w-full h-20 md:w-24 md:h-screen flex flex-row-reverse px-5 md:flex-col justify-between items-center py-5 md:fixed top-0 left-0 z-10 bg-clip-border">
      <Link href="/Map">
        <Image
          src="/icon-principal.svg"
          alt="icone"
          width={48}
          height={56}
          className="w-[35px]"
        />
      </Link>
      <div className="flex gap-5">
        <IconSideBar href="/dashboard">
          <IoLocationOutline />
        </IconSideBar>
        <IconSideBar href="/pending">
          <IoAlertCircleOutline />
        </IconSideBar>
      </div>
      <button className="text-base p-3 md:text-xl md:p-4 rounded-2xl bg-btn-side-bar hover:bg-blue-hover transition">
        <FaPowerOff />
      </button>
    </aside>
  );
};

export default SideBarDashboard;
