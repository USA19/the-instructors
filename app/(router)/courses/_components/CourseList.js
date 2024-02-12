import Link from 'next/link';
import { getCourses } from '../../_utils/GlobalApi';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import CourseCard from './CourseCard';

const CourseList = async () => {
  const { courses } = await getCourses();

  return (
    <div className='p-5 rounded-xl bg-white mt-3'>
      <div className='flex justify-between items-center'>
        <h2 className='font-bold text-[20px] text-primary'>
          All Courses
        </h2>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">All</SelectItem>
            <SelectItem value="dark">Paid</SelectItem>
            <SelectItem value="system">Free</SelectItem>
          </SelectContent>
        </Select>

      </div>

      <div className='grid grid-cols-2 lg:grid-cols-3 gap-3 mt-4'>
        {courses.map((course) => {
          const { id, slug } = course
          return (
            <Link key={id} href={`/course-preview/${slug}`}>
              <CourseCard course={course} />
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default CourseList;