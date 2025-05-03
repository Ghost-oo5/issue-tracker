"use client";
import {
  Avatar,
  Box,
  Container,
  DropdownMenu,
  Flex,
  Text,
} from "@radix-ui/themes";
import classNames from "classnames";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsBugFill } from "react-icons/bs";
const Navbar = () => {
  const { data: session, status } = useSession();
  const currentpath = usePathname();
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];
  console.log("Session:", session);
  console.log("Session User:", session?.user);
  console.log("Session User Image:", session?.user?.image);
  return (
    <nav className="border-b h-16 mb-5">
      <Container>
        <Flex justify="between" className="w-full items-center">
          <div className="flex space-x-6 border-b h-16 items-center">
            <Link href={"/"}>
              <BsBugFill className="text-xl hover:text-zinc-500" />
            </Link>
            <ul className="flex space-x-6">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    className={classNames({
                      "text-zinc-500 ": link.href !== currentpath,
                      "text-zinc-900 ": link.href === currentpath,
                      "hover:text-zinc-900 transition-colors text-lg": true,
                    })}
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Box>
            {status === "loading" && <Text>Loading...</Text>}
            {status === "authenticated" && (
              <DropdownMenu.Root>
                <DropdownMenu.Trigger>
                  <Avatar
                    src={session.user?.image ?? undefined}
                    fallback="?"
                    size="3"
                    radius="full"
                    className="cursor-pointer"
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
              <Link href={"api/auth/signin"}>Signin</Link>
            )}
          </Box>
        </Flex>
      </Container>
    </nav>
  );
};

export default Navbar;
