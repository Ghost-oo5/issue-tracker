"use client";
import { Issue, User } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Skeleton } from "@/app/components/index";

interface Props {
  issue: Issue;
}

const AsigneeSelect = ({ issue }: Props) => {
  const {
    data: users,
    error,
    isLoading,
  } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: () => axios.get("/api/users").then((res) => res.data),
    staleTime: 60 * 1000, //60sec
    retry: 3,
  });
  if (error) return null;
  if (isLoading) return <Skeleton />;
  return (
    <>
      <Select.Root
        defaultValue={issue.assignedToUserId || ""}
        onValueChange={(userID) => {
          const assignedToUserId = userID === "unassigned" ? null : userID;
          axios.patch("/api/issue/" + issue.id, { assignedToUserId });
        }}
      >
        <Select.Trigger placeholder="Assign..." />
        <Select.Content>
          <Select.Group>
            <Select.Label>Suggestions</Select.Label>
            <Select.Item value="unassigned">Unassigned</Select.Item>
            {users?.map((user) => (
              <Select.Item key={user.id} value={user.id}>
                {" "}
                {user.name}
              </Select.Item>
            ))}
          </Select.Group>
        </Select.Content>
      </Select.Root>
    </>
  );
};

export default AsigneeSelect;
