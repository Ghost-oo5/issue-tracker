import { Status } from "@prisma/client";
import { Card, Flex, Text } from "@radix-ui/themes";
import Link from "next/link";

interface Props {
  open: number;
  inprogress: number;
  closed: number;
}

const IssueSummary = ({ closed, inprogress, open }: Props) => {
  const containers: {
    label: string;
    value: number;
    status: Status;
  }[] = [
    { label: "Open Issues", value: open, status: "OPEN" },
    { label: "In progress Issues", value: inprogress, status: "IN_PROGRESS" },
    { label: "Closed Issues", value: closed, status: "CLOSED" },
  ];
  return (
    <>
      <Flex gap={"4"}>
        {containers.map((item, index) => (
          <Card key={index}>
            <Flex direction={"column"} gap={"1"}>
              <Link
                className="text-sm font-medium"
                href={`/issues?status=${item.status}`}
              >
                {item.label}
              </Link>
            </Flex>
            <Text size={"5"} className="font-bold">
              {item.value}
            </Text>
          </Card>
        ))}
      </Flex>
    </>
  );
};

export default IssueSummary;
