"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { BsBugFill } from "react-icons/bs";
import classNames from "classnames";
const Navbar = () => {
  const currentpath = usePathname();
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];
  return (
    <nav className="flex space-x-6 px-5 border-b h-16 items-center font-medium mb-5">
      <Link href={"/"}>
        <BsBugFill className="text-xl hover:text-zinc-500" />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link, index) => (
          <Link key={index}
            className={classNames({
              "text-zinc-500 ": link.href !== currentpath,
              "text-zinc-900 ": link.href === currentpath,
              "hover:text-zinc-900 transition-colors text-lg": true,
            })}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
