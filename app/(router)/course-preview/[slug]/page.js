import CourseContentSection from "./_components/CourseContentSection";
import CourseEnrollmentSection from "./_components/CourseEnrollmentSection";
import VideoDescription from "./_components/VideoDescription";
import { getCourseBySlug } from "../../_utils/GlobalApi";

const CoursePreview = async ({ params }) => {
  const { slug } = params;
  const { course } = await getCourseBySlug(slug);
  const { chapter } = course || {};
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 p-5 gap-3">
      {/* title video description */}
      <div className="col-span-2 bg-white p-3">
        <VideoDescription course={course} />
      </div>

      {/* course content */}
      <div>
        <CourseEnrollmentSection />
        <CourseContentSection chapter={chapter} />
      </div>
    </div>
  )
}

export default CoursePreview 