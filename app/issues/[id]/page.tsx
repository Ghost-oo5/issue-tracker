import { prisma } from "@/app/components";
import { notFound } from "next/navigation";
import EditIssueButton from "./EditIssueButton";
import IssueDetails from "./IssueDetails";
import DeleteIssueButton from "./DeleteIssueButton";
import { Box, Flex, Grid } from "@radix-ui/themes";
interface Props {
  params: Promise<{ id: string }>;
}

const IssueDetailsPage = async ({ params }: Props) => {
  const {id} = await params;
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
      <Grid columns={{initial:'1', sm:'5'}} gap={'5'}>

       <Box className="md:col-span-4">
         <IssueDetails issue={issue}/>
       </Box>
       <Box>
         <Flex direction={'column'} gap={'5'}>
           <EditIssueButton IssueID={issue.id}/>
           <DeleteIssueButton IssueID={issue.id}/>
         </Flex>
       </Box>
      </Grid>
    </>
  );
};

export default IssueDetailsPage;
