import { Button, Flex } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'
import IssueStatus from './IssueStatusFilter'

const IssuesActions = () => {
  return (
    <>
          <Flex  className='mb-5' justify={'between'}>
            <IssueStatus/>
              <Button>
                <Link href="issues/new">New issue</Link>
              </Button>
          </Flex>
    </>
  )
}

export default IssuesActions