"use client";
import { Button, Callout, TextField } from "@radix-ui/themes";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Form, useForm, Controller } from "react-hook-form";
import { BiError } from "react-icons/bi";
import SimpleMDE from "react-simplemde-editor";

interface IssueForm {
  title: string;
  description: string;
}

const NewIssue = () => {
  const { register, control, handleSubmit } = useForm<IssueForm>();
  const router = useRouter();
  const [error, setError] = useState("");
  return (
    <div className="max-w-xl ">
      <div className="mb-5">
       { error && <Callout.Root color="red">
          <Callout.Icon>
            <BiError />
          </Callout.Icon>
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>}
      </div>
      <form
        className="space-y-3"
        onSubmit={handleSubmit(async (data) => {
          console.log(data);
       
            await axios.post("/api/issue", data).then(()=>router.push("/issues")).catch((err)=>setError(err.message));

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
    </div>
  );
};

export default NewIssue;
