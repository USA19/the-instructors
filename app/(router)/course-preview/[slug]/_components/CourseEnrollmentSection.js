"use client"
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { toast } from "sonner"
import { Button } from '@/components/ui/button'
import { enrollToCourse } from "@/app/(router)/_utils/GlobalApi";

const CourseEnrollmentSection = ({ isFreeCourse, courseSlug, enrollId }) => {
  const { user } = useUser()
  const router = useRouter()
  const { primaryEmailAddress } = user || {};
  const { emailAddress } = primaryEmailAddress || {}

  const onButtonClick = async () => {
    if (!user) {
      return router.push('/sign-in');
    }

    if (user && !isFreeCourse) {
      return router.push('/membership');
    };

    if (enrollId) {
      return router.push(`/watch-course/${enrollId}`)
    }

    if (user && !enrollId) {
      const { createUserEnrollCourse } = await enrollToCourse(emailAddress, courseSlug);
      const { id } = createUserEnrollCourse || {}
      toast("Congratulations", {
        description: "User has successfully Enrolled to the course."
      })
      router.push(`/watch-course/${id}`)
    }

  };


  return (
    <div className='p-3 text-center rounded-sm bg-primary flex flex-col gap-3'>

      <h2 className='text-[22px] font-bold text-white'>
        {enrollId ? "Watch Course" : "Enroll to the Course"}
      </h2>

      {!enrollId &&
        <h2 className='font-light text-white mt-3'>
          {isFreeCourse && user ? "Enroll Now to Start Learning and Build the project" : "Buy Membership  and Get Access to All Courses"}
        </h2>
      }

      <Button className="bg-white text-primary hover:bg-white hover:text-primary mt-3" onClick={onButtonClick}>
        {isFreeCourse && user && !enrollId ? "Enroll Now" : enrollId ? "Watch Now" : "Buy Membership  just $2.99"}
      </Button>

    </div>
  )
}

export default CourseEnrollmentSection