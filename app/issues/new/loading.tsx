import { Skeleton } from "@/app/components/index";

const IssueDetailLoadingPage = () => {
  return (
    <div className="max-w-xl ">
      <Skeleton />
      <Skeleton height={"15rem"} />
    </div>
  );
};

export default IssueDetailLoadingPage;
