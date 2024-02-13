"use client"
import { useEffect, useState } from "react";
import { getUserCourseEnrollmentById } from "../../_utils/GlobalApi"
import CourseContentSection from "../../course-preview/[slug]/_components/CourseContentSection";
import VideoDescription from "../../course-preview/[slug]/_components/VideoDescription";

const WatchCourse = ({ params }) => {
  const { enrollId } = params;
  const [currentChapter, setCurrentChapter] = useState(null);
  const [userEnrollCourse, setUserEnrollCourse] = useState(null);

  const { course } = userEnrollCourse || {};
  const { chapter } = course || {}

  useEffect(() => {
    (async () => {
      const { userEnrollCourse } = await getUserCourseEnrollmentById(enrollId)
      setUserEnrollCourse(userEnrollCourse);
    })()
  }, [enrollId]);

  return userEnrollCourse && (
    <div className="grid grid-cols-1 md:grid-cols-3 p-5 gap-3">
      {/* title video description */}
      <div className="col-span-2 bg-white p-3">
        <VideoDescription
          course={course}
          watchMode={true}
          currentChapter={currentChapter}
          userEnrollCourse={userEnrollCourse}
          setUserEnrollCourse={setUserEnrollCourse}
        />
      </div>

      {/* course content */}
      <div>
        <CourseContentSection
          chapter={chapter}
          watchMode={true}
          setCurrentChapter={setCurrentChapter}
          userEnrollCourse={userEnrollCourse}
        />
      </div>
    </div>
  )
}

export default WatchCourse 