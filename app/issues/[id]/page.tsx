import { IssueStatusBadge, prisma } from "@/app/components";
import { Pencil2Icon } from "@radix-ui/react-icons";
import { Button, Card, Flex, Heading, Text } from "@radix-ui/themes";
import Link from "next/link";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";
interface Props {
  params: { id: string };
}

const IssueDetailsPage = async ({ params: { id } }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  if (!issue) {
    return notFound();
  }
  return (
    <>
      <div className="max-w-xl max-sm:flex-col flex  justify-between">
        <div className="w-full">
          <Heading>{issue?.title}</Heading>
          <Flex gap={"2"} my={"2"}>
            <IssueStatusBadge status={issue.status} />
            <Text>{issue.createdAt.toDateString()}</Text>
          </Flex>
          <Card className="prose" mt={"4"}>
            <Markdown>{issue.description}</Markdown>
          </Card>
        </div>
        <Button>
          <Pencil2Icon />
          <Link href={`/issues/${issue.id}/edit`}>Edit Issue</Link>
        </Button>
      </div>
    </>
  );
};

export default IssueDetailsPage;
