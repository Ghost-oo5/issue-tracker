"use client";
import { Button, Dialog, Flex } from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface DeleteIssue {
  IssueID: number;
  IssueName: string;
}

const DeleteIssueButton = ({ IssueName, IssueID }: DeleteIssue) => {
  const route = useRouter();
  const [error, setError] = useState(false);

  const HandleDeleteIssue = async () => {
    await axios
      .delete(`/api/issuse/ ${IssueID}`)
      .then(() => {
        route.push("/issues");
        route.refresh();
      })
      .catch((error) => error.message);
    setError(true);
  };

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
              <Button onClick={HandleDeleteIssue}>Delete</Button>
            </Dialog.Close>
          </Flex>
        </Dialog.Content>
      </Dialog.Root>

      <Dialog.Root open={error}>
        <Dialog.Content maxWidth="450px">
          <Dialog.Title>Error</Dialog.Title>
          <Dialog.Description size="2" mb="4">
            This issue could not be deleted.
          </Dialog.Description>
          <Flex gap="3" mt="4" justify="end">
            <Dialog.Close>
              <Button
                variant="soft"
                color="gray"
                onClick={() => setError(false)}
              >
                okay
              </Button>
            </Dialog.Close>
          </Flex>
        </Dialog.Content>
      </Dialog.Root>
    </>
  );
};

export default DeleteIssueButton;
