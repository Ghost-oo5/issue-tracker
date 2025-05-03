import { IssueStatusBadge } from "@/app/components";
import { Issue } from "@prisma/client";
import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import Markdown from "react-markdown";

interface Props {
  issue: Issue;
}

const IssueDetails = ({ issue }: Props) => {
  return (
    <>
      <div className="w-full">
        <Heading>{issue?.title}</Heading>
        <Flex gap={"2"} my={"2"}>
          <IssueStatusBadge status={issue.status} />
          <Text>{issue.createdAt.toDateString()}</Text>
        </Flex>
        <Card className="prose max-w-full" mt={"4"}>
          <Markdown>{issue.description}</Markdown>
        </Card>
      </div>
    </>
  );
};

export default IssueDetails;
