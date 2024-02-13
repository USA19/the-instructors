import { getUserEnrolledCourses } from "../../_utils/GlobalApi";
import InProgressCourseItem from "./InProgressCourseItem";

const InProgressCourseList = async ({ user }) => {
  const { primaryEmailAddress } = user || {};
  const { emailAddress } = primaryEmailAddress || {};
  const { userEnrollCourses = [] } = await getUserEnrolledCourses(emailAddress);

  return (
    <div className="p-5 bg-white mt-3 rounded-xl">
      <h2 className="text-primary text-[18px] font-semibold">
        Recent Progress
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-3">
        {userEnrollCourses.map((userEnrollCourse) => {
          const { id } = userEnrollCourse
          return <InProgressCourseItem key={id} userEnrollCourse={userEnrollCourse} />
        })}
      </div>
    </div>
  )
}

export default InProgressCourseList;