import { prisma } from "./components";
import IssueChart from "./IssueChart";
import IssueSummary from "./IssueSummary";

export default async function Home() {
  const open = await prisma.issue.count({
    where: { status: "OPEN" },
  });
  const inProgress = await prisma.issue.count({
    where: { status: "IN_PROGRESS" },
  });
  const closed = await prisma.issue.count({
    where: { status: "CLOSED" },
  });
  return (
    <>
      <IssueChart closed={closed} inprogress={inProgress} open={open} />
      <IssueSummary closed={closed} inprogress={inProgress} open={open} />
    </>
  );
}
