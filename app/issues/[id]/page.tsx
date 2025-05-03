import { prisma } from "@/app/components";
import { notFound } from "next/navigation";
import EditIssueButton from "./EditIssueButton";
import IssueDetails from "./IssueDetails";
import DeleteIssueButton from "./DeleteIssueButton";
import { Box, Flex, Grid } from "@radix-ui/themes";
import { getServerSession } from "next-auth";
import AuthOptions from "@/app/api/auth/AuthOptions";
interface Props {
  params: Promise<{ id: string }>;
}

const IssueDetailsPage = async ({ params }: Props) => {
const session = await getServerSession(AuthOptions);
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
    {session &&   <Box>
         <Flex direction={'column'} gap={'5'}>
           <EditIssueButton IssueID={issue.id}/>
           <DeleteIssueButton IssueID={issue.id} IssueName={issue.title}/>
         </Flex>
       </Box>}
      </Grid>
    </>
  );
};

export default IssueDetailsPage;
