import { Issue, Status } from "@prisma/client";
import { ArrowUpIcon } from "@radix-ui/react-icons";
import { Table } from "@radix-ui/themes";
import Link from "next/link";
import { IssueStatusBadge, Links } from "../components";

export interface IssueQuery {
  status: Status;
  orderBy: keyof Issue;
  page: string;
}

interface Props {
  searchParams: IssueQuery;
  issues: Issue[];
}

export const columns: {
  id?: keyof Issue;
  label: string;
  value: keyof Issue;
  className?: string;
}[] = [
  { label: "Id", value: "id" },
  { label: "Issue", value: "title" },
  { label: "Description", value: "description" },
  { label: "Status", value: "status", className: "hidden md:table-cell" },
  { label: "Created", value: "createdAt", className: "hidden md:table-cell" },
  { label: "Updated", value: "updatedAt", className: "hidden md:table-cell" },
];

const IssueTable = ({ searchParams, issues }: Props) => {
  const { orderBy, status } = searchParams;
  const isValidStatus = (s: string): s is Status =>
    Object.values(Status).includes(s as Status);

  const statusFilter = isValidStatus(status ?? "")
    ? (status as Status)
    : undefined;
  return (
    <>
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            {columns.map((item) => (
              <Table.ColumnHeaderCell
                key={item.value}
                className={item.className}
              >
                <Link
                  href={{
                    query: { status: statusFilter, orderBy: item.value },
                  }}
                >
                  {item.label}
                </Link>
                {item.value === orderBy && <ArrowUpIcon className="inline" />}
              </Table.ColumnHeaderCell>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {issues.map((item) => (
            <Table.Row key={item.id}>
              <Table.Cell>{item.id}</Table.Cell>
              <Table.Cell>
                <Links href={`/issues/${item.id}`}>{item.title}</Links>
                <div className="block md:hidden">
                  {" "}
                  <IssueStatusBadge status={item.status} />
                </div>
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                {item.description}
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                {" "}
                <IssueStatusBadge status={item.status} />{" "}
              </Table.Cell>
              <Table.Cell>{item.createdAt.toDateString()}</Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                {item.updatedAt.toDateString()}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </>
  );
};

export default IssueTable;
