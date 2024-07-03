import Link from "next/link";
import React from "react";

type Props = {
  href: string;
  children: React.ReactNode;
};

const IconSideBar = ({ href, children }: Props) => {
  return (
    <Link
      href={href}
      className="text-base p-3 md:text-xl md:p-4 rounded-2xl bg-btn-side-bar hover:bg-blue-hover transition focus:bg-yellow active:bg-yellow focus:text-blue active:text-blue"
    >
      {children}
    </Link>
  );
};

export default IconSideBar;
