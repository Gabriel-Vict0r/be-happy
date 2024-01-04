import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa6";

type Props = {};

const SideBar = (props: Props) => {
  return (
    <aside className="bg-gradient-to-r from-initial-gradient to-end-gradient w-full h-20 md:w-24 md:h-screen flex flex-row-reverse px-5 md:flex-col justify-between items-center py-5 md:fixed top-0 left-0 z-10">
      <Image
        src="/icon-principal.svg"
        alt="icone"
        width={48}
        height={56}
        className="w-[35px]"
      />
      <Link
        href="/Form"
        className="text-base p-3 md:text-xl md:p-4 rounded-2xl bg-btn-side-bar hover:bg-blue-hover transition"
      >
        <FaArrowLeft />
      </Link>
    </aside>
  );
};

export default SideBar;
