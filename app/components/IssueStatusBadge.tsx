import { Status } from "@prisma/client";
import { Badge } from "@radix-ui/themes";
import React from "react";

interface Props {
  status: Status;
}

const statusMap: Record<
  Status,
  { label: string; color: "green" | "red" | "violet" }
> = {
  OPEN: { label: "Open", color: "green" },
  CLOSED: { label: "Closed", color: "red" },
  IN_PROGRESS: { label: "In Progress", color: "violet" },
};

const IssueStatusBadge = ({ status }: Props) => {
  return (
    <>
      <Badge color={statusMap[status].color}>{statusMap[status].label}</Badge>
    </>
  );
};

export default IssueStatusBadge;
