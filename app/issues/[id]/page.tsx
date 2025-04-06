import { prisma } from "@/app/components";
import { notFound } from "next/navigation";
import EditIssueButton from "./EditIssueButton";
import IssueDetails from "./IssueDetails";
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
       <IssueDetails issue={issue}/>
       <EditIssueButton IssueID={issue.id}/>
      </div>
    </>
  );
};

export default IssueDetailsPage;
