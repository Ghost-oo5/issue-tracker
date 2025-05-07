"use client";
import { Status } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import { useRouter } from "next/navigation";

const Statuses: { label: string; value?: Status }[] = [
  { label: "All" },
  { label: "Open", value: "OPEN" },
  { label: "In Progress", value: "IN_PROGRESS" },
  { label: "Closed", value: "CLOSED" },
];

const IssueStatus = () => {
  const router = useRouter();
  return (
    <>
      <Select.Root
        onValueChange={(status) => {
          const query = status ? `?status=${status}` : "";
          // console.log(status)
          router.push("/issues" + query);
        }}
      >
        <Select.Trigger placeholder="Filter by Status" />
        <Select.Content>
          {Statuses.map((status) => (
            <Select.Item key={status.label} value={status.value || " "}>
              {status.label}
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Root>
    </>
  );
};

export default IssueStatus;
