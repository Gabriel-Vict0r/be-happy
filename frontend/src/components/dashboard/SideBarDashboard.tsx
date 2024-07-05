"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { FaPowerOff } from "react-icons/fa6";
import IconSideBar from "./IconSideBar";
import { IoAlertCircleOutline } from "react-icons/io5";
import { signOut } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
type Props = {};

const SideBarDashboard = (props: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const [dashboard, setDashboard] = useState<boolean>(true);
  const [pending, setPending] = useState<boolean>(false);

  useEffect(() => {
    if (pathname === "/dashboard") {
      setDashboard(true);
      setPending(false);
    }
    if (pathname === "/pending") {
      setDashboard(false);
      setPending(true);
    }
  }, [pathname]);

  async function logOut() {
    await signOut({
      redirect: false,
    });
    router.replace("/");
  }
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
      <div className="flex gap-5 md:flex-col">
        <IconSideBar href="/dashboard" active={dashboard}>
          <IoLocationOutline />
        </IconSideBar>
        <IconSideBar href="/pending" active={pending}>
          <IoAlertCircleOutline />
        </IconSideBar>
      </div>
      <button
        className="text-base p-3 md:text-xl md:p-4 rounded-2xl bg-btn-side-bar hover:bg-blue-hover transition"
        onClick={logOut}
      >
        <FaPowerOff />
      </button>
    </aside>
  );
};

export default SideBarDashboard;
