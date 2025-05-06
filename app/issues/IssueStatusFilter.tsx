import { Status } from "@prisma/client";
import { Select } from "@radix-ui/themes";

const Statuses: { label: string; value?: Status }[] = [
  { label: "All" },
  { label: "Open", value: "OPEN" },
  { label: "In Progress", value: "IN_PROGRESS" },
  { label: "Closed", value: "CLOSED" },
];

const IssueStatus = () => {
  return (
    <>
      <Select.Root>
        <Select.Trigger placeholder="Filter by Status" />
        <Select.Content>
          {Statuses.map((item, index) => (
            <Select.Item key={item.value} value={item.value || " "}>
              {item.label}
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Root>
    </>
  );
};

export default IssueStatus;
