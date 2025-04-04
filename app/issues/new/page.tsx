'use client'
import { Button, TextField } from '@radix-ui/themes';
import "easymde/dist/easymde.min.css";
import SimpleMDE from "react-simplemde-editor";
const NewIssue = () => {
  return (
    <>
    <div className='max-w-xl space-y-3'>
        <TextField.Root placeholder='Title'></TextField.Root>
        <SimpleMDE placeholder='Enter description here'/>
        <Button>Submit new Issue</Button>
    </div>
    </>
  )
}

export default NewIssue