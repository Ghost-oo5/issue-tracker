import { Flex, Card } from '@radix-ui/themes'
import React from 'react'
import {Skeleton} from '@/app/components/index'

const IssueFormSkeleton = () => {
  return (
    <div className='max-w-lg'>
    <Skeleton/>
    <Flex gap={"2"} my={"2"}>
    <Skeleton width={'5rem'}/>
    <Skeleton width={'8rem'}/>
    </Flex>
    <Card mt={'4'}>
    <Skeleton count={3}/>
    </Card>
  </div>  )
}

export default IssueFormSkeleton