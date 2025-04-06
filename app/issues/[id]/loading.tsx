import { Card, Flex } from '@radix-ui/themes';
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const IssueDetailLoadingPage = async () => {

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
      </div>
  )
}

export default IssueDetailLoadingPage