"use client";
import { Button, TextField } from "@radix-ui/themes";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";
import { Form, useForm, Controller } from "react-hook-form";
import SimpleMDE from "react-simplemde-editor";

interface IssueForm {
  title: string;
  description: string;
}

const NewIssue = () => {
  const { register, control, handleSubmit } = useForm<IssueForm>();
  const router = useRouter();
  return (
    <>
      <form
        className="max-w-xl space-y-3"
        onSubmit={handleSubmit(async (data) => {
          console.log(data);
          await axios.post("/api/issue", data);
          router.push("/issues");
        })}
      >
        <TextField.Root placeholder="Title" {...register("title")} />
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="Enter description here" {...field} />
          )}
        />
        <Button type="submit">Submit new Issue</Button>
      </form>
    </>
  );
};

export default NewIssue;
