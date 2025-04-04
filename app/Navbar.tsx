import Link from "next/link";
import React from "react";
import { BsBugFill } from "react-icons/bs";

const Navbar = () => {
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];
  return (
    <nav className="flex space-x-6 px-5 border-b h-16 items-center">
      <Link href={"/"}>
        <BsBugFill className="text-xl hover:text-zinc-300" />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link className="text-zinc-500 hover:text-zinc-200 transition-colors text-lg" href={link.href}>{link.label}</Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
