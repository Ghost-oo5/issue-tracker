import { IssuesActions, prisma } from "@/app/components/index";
import { Issue, Status } from "@prisma/client";
import { Flex } from "@radix-ui/themes";
import Pagination from "../components/Pagination";
import IssueTable, { columns, IssueQuery } from "./IssueTable";
import { Metadata } from "next";

interface Props {
  searchParams: Promise<IssueQuery>;
}

const validOrderByColumns: (keyof Issue)[] = columns
  .map((c) => c.value)
  .filter(Boolean) as (keyof Issue)[];

const IssuesPage = async ({ searchParams }: Props) => {
  const { status, orderBy, page: pageParam } = await searchParams;
  const page = parseInt(pageParam) || 1;
  const pageSize = 10;
  const isValidStatus = (s: string): s is Status =>
    Object.values(Status).includes(s as Status);

  const statusFilter = isValidStatus(status ?? "")
    ? (status as Status)
    : undefined;
  const orderByColumn = validOrderByColumns.includes(orderBy)
    ? orderBy
    : "createdAt";

  const issues = await prisma.issue.findMany({
    where: {
      status: statusFilter,
    },
    orderBy: {
      [orderByColumn]: "asc",
    },
    skip: (page - 1) * pageSize,
    take: pageSize,
  });

  const issueCount = await prisma.issue.count({
    where: { status: statusFilter },
  });
  return (
    <Flex direction={"column"} gap={"3"}>
      <IssuesActions />
      <IssueTable searchParams={searchParams} issues={issues} />
      <Pagination
        currentPage={page}
        itemCount={issueCount}
        pageSize={pageSize}
      />
    </Flex>
  );
};

export const dynamic = "force-dynamic";
export const metadata: Metadata={
  title: "Issue Tracker - Issues ",
  description:"View all project issues"
};
export default IssuesPage;
