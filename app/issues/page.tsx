import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

const IssuesPage = () => {
  return (
    <Button>
      <Link href="issues/new">New issue</Link>
    </Button>
  );
};

export default IssuesPage;
