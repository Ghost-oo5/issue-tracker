import { Flex, Grid } from "@radix-ui/themes";
import { prisma } from "./components";
import IssueChart from "./IssueChart";
import IssueSummary from "./IssueSummary";
import LatestIssues from "./LatestIssues";
import { Metadata } from "next";

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
      <Grid columns={{ initial: "1", md: "2" }} gap={"5"} mt={"5"}>
        <Flex direction={"column"} gap={"5"}>
          <IssueSummary closed={closed} inprogress={inProgress} open={open} />
          <IssueChart closed={closed} inprogress={inProgress} open={open} />
        </Flex>
        <LatestIssues />
      </Grid>
    </>
  );
}

export const metadata: Metadata={
  title: "Issue Tracker - Dashboard",
  description:"View summary of project Issues"
};