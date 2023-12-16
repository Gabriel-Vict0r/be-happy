import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa6";

type Props = {};

const SideBar = (props: Props) => {
  return (
    <aside className="w-24 bg-gradient-to-r from-initial-gradient to-end-gradient h-screen flex flex-col justify-between items-center py-5">
      <Image src="/icon-principal.svg" alt="icone" width={48} height={56} />
      <Link
        href="/"
        className="text-xl p-4 rounded-2xl bg-btn-side-bar hover:bg-blue-hover transition"
      >
        <FaArrowLeft />
      </Link>
    </aside>
  );
};

export default SideBar;
