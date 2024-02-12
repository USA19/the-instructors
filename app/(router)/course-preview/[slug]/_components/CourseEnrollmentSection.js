import { Button } from '@/components/ui/button'
import React from 'react'

const CourseEnrollmentSection = () => {
  return (
    <div className='p-3 text-center rounded-sm bg-primary flex flex-col gap-3'>
      <h2 className='text-[22px] font-bold text-white'>
        Enroll to the Course
      </h2>

      <h2 className='font-light text-white mt-3'>
        Enroll Now to Start Learning and Build the project
      </h2>

      <Button className="bg-white text-primary hover:bg-white hover:text-primary mt-3">
        Enroll Now
      </Button>
    </div>
  )
}

export default CourseEnrollmentSection