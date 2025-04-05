"use client";
import { Button, Callout, Text, TextField } from "@radix-ui/themes";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Form, useForm, Controller } from "react-hook-form";
import { BiError } from "react-icons/bi";
import SimpleMDE from "react-simplemde-editor";
import { zodResolver } from "@hookform/resolvers/zod";
import { createIssueSchema } from "@/app/validationSchema";
import { z } from "zod";

type IssueForm = z.infer<typeof createIssueSchema>;
const NewIssue = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IssueForm>({
    resolver: zodResolver(createIssueSchema),
  });
  const router = useRouter();
  const [error, setError] = useState("");
  return (
    <div className="max-w-xl ">
      <div className="mb-5">
        {error && (
          <Callout.Root color="red">
            <Callout.Icon>
              <BiError />
            </Callout.Icon>
            <Callout.Text>{error}</Callout.Text>
          </Callout.Root>
        )}
      </div>
      <form
        className="space-y-3"
        onSubmit={handleSubmit(async (data) => {
          console.log(data);
          await axios
            .post("/api/issue", data)
            .then(() => router.push("/issues"))
            .catch((err) => setError(err.message));
        })}
      >
        <TextField.Root placeholder="Title" {...register("title")} />
        {errors.title && (
          <Text color="red" as="div">{errors.title.message}</Text>
        )}
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE className="mb-0" placeholder="Enter description here" {...field} />
          )}
        />
        <div>
          {errors.description && (
            <Text color="red"as="div">{errors.description.message}</Text>
          )}
        </div>

        <Button type="submit">Submit new Issue</Button>
      </form>
    </div>
  );
};

export default NewIssue;
