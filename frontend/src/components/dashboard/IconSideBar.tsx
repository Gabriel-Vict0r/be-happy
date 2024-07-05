import Link from "next/link";
import React from "react";

type Props = {
  href: string;
  children: React.ReactNode;
  active?: boolean;
};

const IconSideBar = ({ href, children, active }: Props) => {
  return (
    <Link
      href={href}
      className={`text-base p-3 md:text-xl md:p-4 rounded-2xl  ${
        active ? "" : "hover:bg-blue-hover"
      } transition ${active ? "bg-yellow text-blue" : "bg-btn-side-bar"}`}
    >
      {children}
    </Link>
  );
};

export default IconSideBar;
