import { Button } from '@radix-ui/themes'

interface DeleteIssue{
    IssueID: number
}

const DeleteIssueButton = ({IssueID}:DeleteIssue) => {
  return (
<>
<Button color='red'>
    Delete Issue
</Button>
</>
)
}

export default DeleteIssueButton