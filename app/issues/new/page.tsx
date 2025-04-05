"use client";
import ErrorMessage from "@/app/components/ErrorMessage";
import { createIssueSchema } from "@/app/validationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Callout, Spinner, TextField } from "@radix-ui/themes";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { BiError } from "react-icons/bi";
import SimpleMDE from "react-simplemde-editor";
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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const Submit = handleSubmit(async (data) => {
    console.log(data);
    await axios
      .post("/api/issue", data)
      .then(() => {
        router.push("/issues");
        setIsSubmitting(true);
      })
      .catch((err) => {
        setError(err.message);
        setIsSubmitting(false);
      });
  })
  
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
        onSubmit={Submit}
      >
        <TextField.Root placeholder="Title" {...register("title")} />
        {errors.title && <ErrorMessage>{errors.title.message}</ErrorMessage>}
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE
              className="mb-0"
              placeholder="Enter description here"
              {...field}
            />
          )}
        />
        <div>
          {errors.description && (
            <ErrorMessage>{errors.description.message}</ErrorMessage>
          )}
        </div>

        <Button disabled={isSubmitting} type="submit">
          Submit new Issue {isSubmitting && <Spinner />}
        </Button>
      </form>
    </div>
  );
};

export default NewIssue;
