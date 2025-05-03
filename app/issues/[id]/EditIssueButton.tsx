import { Pencil2Icon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import Link from "next/link";

interface Props {
  IssueID: number;
}

const EditIssueButton = ({ IssueID }: Props) => {
  return (
    <>
      <Button color="blue">
        <Pencil2Icon />
        <Link href={`/issues/${IssueID}/edit`}>Edit Issue</Link>
      </Button>
    </>
  );
};

export default EditIssueButton;
