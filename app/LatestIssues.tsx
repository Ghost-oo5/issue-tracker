import { Avatar, Card, Flex, Heading, Table } from "@radix-ui/themes";
import Link from "next/link";
import { IssueStatusBadge, prisma } from "./components";

const LatestIssues = async () => {
  const issues = await prisma.issue.findMany({
    orderBy: { createdAt: "desc" },
    take: 5,
    include: {
      assignedToUser: true,
    },
  });
  return (
    <>
      <Card>
        <Heading size={"4"} mb={"5"}>
          Latest Issues
        </Heading>
        <Table.Root>
          <Table.Body>
            {issues.map((item) => (
              <Table.Row key={item.id}>
                <Table.Cell>
                  <Flex justify={"between"}>
                    <Flex direction={"column"} align={"start"} gap={"2"}>
                      <Link href={`/issues/${item.id}`}>{item.title}</Link>
                      <IssueStatusBadge status={item.status} />
                    </Flex>
                    {item.assignedToUser && (
                      <Avatar
                        fallback="?"
                        src={item.assignedToUser.image!}
                        size={"2"}
                        radius="full"
                      />
                    )}
                  </Flex>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </Card>
    </>
  );
};

export default LatestIssues;
