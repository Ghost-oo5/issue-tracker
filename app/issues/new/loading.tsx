import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const IssueDetailLoadingPage = () => {
  return (
    <div className="max-w-xl ">
     <Skeleton/>
     <Skeleton height={'15rem'}/>
    </div>
  );
};

export default IssueDetailLoadingPage;
