import { Select } from "@radix-ui/themes";

const AsigneeSelect = () => {
  return (
    <>
      <Select.Root>
        <Select.Trigger placeholder="Assign..." />
        <Select.Content>
          <Select.Group>
            <Select.Label>Suggestions</Select.Label>
            <Select.Item value="1">Abdul Basit</Select.Item>
            <Select.Item value="2">Ehsan ul Haq</Select.Item>
            <Select.Item value="3">Faheem Iqbal</Select.Item>
          </Select.Group>
        </Select.Content>
      </Select.Root>
    </>
  );
};

export default AsigneeSelect;
