"use client";
import logo from "@/public/Bug.svg";
import {
  Avatar,
  Box,
  Container,
  DropdownMenu,
  Flex,
  Spinner,
  Text,
} from "@radix-ui/themes";
import classNames from "classnames";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Navbar = () => {
  return (
    <nav className="border-b h-16 mb-5">
      <Container>
        <Flex justify="between" className="w-full items-center">
          <div className="flex space-x-6 border-b h-16 items-center">
            <Link href={"/"}>
              {/* <BsBugFill className="text-xl hover:text-zinc-500" /> */}
              <Image src={logo} width={25} height={25} alt="Bug image"/>
            </Link>
            <NavLinks />
          </div>
          <AuthStatus />
        </Flex>
      </Container>
    </nav>
  );
};

const NavLinks = () => {
  const currentpath = usePathname();
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];
  return (
    <>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              className={classNames({
                "nav-link": true,
                "!text-zinc-900": link.href === currentpath,
              })}
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

const AuthStatus = () => {
  const { data: session, status } = useSession();
  return (
    <>
      <Box>
        {status === "loading" && <Spinner />}
        {status === "authenticated" && (
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <Avatar
                src={session.user?.image ?? undefined}
                fallback="?"
                size="3"
                radius="full"
                className="cursor-pointer"
                referrerPolicy="no-referrer"
              />
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Label>
                <Text>{session.user?.email}</Text>
              </DropdownMenu.Label>
              <DropdownMenu.Item>
                <Link href={"api/auth/signout"}>Sign out</Link>
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        )}
        {status === "unauthenticated" && (
          <Link className="nav-link" href={"api/auth/signin"}>
            Signin
          </Link>
        )}
      </Box>
    </>
  );
};

export default Navbar;
