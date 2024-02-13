"use client";
import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import CourseContentSection from "./_components/CourseContentSection";
import CourseEnrollmentSection from "./_components/CourseEnrollmentSection";
import VideoDescription from "./_components/VideoDescription";
import { getCourseBySlug, getUserCourseEnrollment } from "../../_utils/GlobalApi";

const CoursePreview = ({ params }) => {
  const { user } = useUser()
  const { primaryEmailAddress } = user || {};
  const { emailAddress } = primaryEmailAddress || {}
  const [course, setCourse] = useState(null);
  const [enrollId, setIsEnrollId] = useState(null);
  const { slug } = params;
  const { chapter, free, } = course || {};

  useEffect(() => {
    (async () => {
      if (slug && emailAddress) {
        const [{ course }, { userEnrollCourses }] = await Promise.all([
          getCourseBySlug(slug),
          getUserCourseEnrollment(emailAddress, slug)
        ]);

        setCourse(course);
        setIsEnrollId(userEnrollCourses[0]?.id || null)
      }
    })()
  }, [slug, emailAddress]);

  return course && (
    <div className="grid grid-cols-1 md:grid-cols-3 p-5 gap-3">
      {/* title video description */}
      <div className="col-span-2 bg-white p-3">
        <VideoDescription course={course} />
      </div>

      {/* course content */}
      <div>
        <CourseEnrollmentSection isFreeCourse={free} courseSlug={slug} enrollId={enrollId} />
        <CourseContentSection chapter={chapter} isEnrolled={!!enrollId} />
      </div>
    </div>
  )
}

export default CoursePreview 