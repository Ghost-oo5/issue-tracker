import { Link as RadixLink } from "@radix-ui/themes";
import Link from "next/link";
import React, { ReactNode } from "react";

interface Props {
  href: string;
  children: ReactNode;
}

const Links = ({ href, children }: Props) => {
  return (
      <Link href={href} legacyBehavior passHref>
    <RadixLink>
      {children}
    </RadixLink>
      </Link>
  );
};

export default Links;
