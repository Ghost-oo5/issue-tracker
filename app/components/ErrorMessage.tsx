import { Text } from "@radix-ui/themes";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const ErrorMessage = ({ children }: Props) => {
  return (
    <Text color="red" as="div">
      {children}
    </Text>
  );
};

export default ErrorMessage;
