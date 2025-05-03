'use client'
import { Button, Dialog, Flex } from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";

interface DeleteIssue {
  IssueID: number;
  IssueName: string;
}

const DeleteIssueButton = ({ IssueName, IssueID }: DeleteIssue) => {
  const route = useRouter();

  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger>
          <Button color="red">Delete Issue</Button>
        </Dialog.Trigger>
        <Dialog.Content maxWidth="450px">
          <Dialog.Title>Delete Issue</Dialog.Title>
          <Dialog.Description size="2" mb="4">
            Are you sure you want to delete {IssueName} ?
          </Dialog.Description>
          <Flex gap="3" mt="4" justify="end">
            <Dialog.Close>
              <Button variant="soft" color="gray">
                Cancel
              </Button>
            </Dialog.Close>
            <Dialog.Close>
              <Button
                onClick={async () => {
                  await axios.delete(`/api/issue/ ${IssueID}`);
                  route.push("/issues");
                  route.refresh();
                }}
              >
                Delete
              </Button>
            </Dialog.Close>
          </Flex>
        </Dialog.Content>
      </Dialog.Root>
    </>
  );
};

export default DeleteIssueButton;
