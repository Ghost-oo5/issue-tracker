import { Button, TextArea, TextField } from '@radix-ui/themes'
import React from 'react'

const NewIssue = () => {
  return (
    <>
    <div className='max-w-xl space-y-3'>
        <TextField.Root placeholder='Title'></TextField.Root>
        <TextArea placeholder='Enter description here'/>
        <Button>Submit new Issue</Button>
    </div>
    </>
  )
}

export default NewIssue