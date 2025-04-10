import {
  prisma,
  IssueStatusBadge,
  Links,
  IssuesActions,
} from "@/app/components/index";
import { Table } from "@radix-ui/themes";
import delay from "delay";

const IssuesPage = async () => {
  const issues = await prisma.issue.findMany();
  await delay(2000);
  return (
    <>
      <IssuesActions />
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Id</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Title</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Description
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Status
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Created at</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Updated at
            </Table.ColumnHeaderCell>
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

export default IssuesPage;
