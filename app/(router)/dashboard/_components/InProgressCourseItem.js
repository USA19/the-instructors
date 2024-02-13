import Image from 'next/image'
import { Progress } from "@/components/ui/progress"

const InProgressCourseItem = ({ userEnrollCourse }) => {
  const { course, completedChapter = [] } = userEnrollCourse || {};
  const { banner, name, author, totalChapters, slug } = course || {}
  const { url } = banner || {};
  const completeChapterProgress = (((completedChapter.length || 0) * (totalChapters || 0)) / 100);

  return (
    <Link href={`/course-preview/${slug}`}>
      <div className='border rounded-t-xl rounded-b-sm cursor-pointer hover:shadow-md hover:shadow-purple-300'>
        <Image src={url || ""} width={500} height={150} alt={name} className='rounded-t-xl' />
        <div className='flex flex-col gap-1 p-1'>
          <h2 className='font-medium'>
            {name}
          </h2>
          <h2 className='text-[12px] text-gray-400'>
            {author}
          </h2>

          <h2 className='text-[12px] text-gray-400 mt-3'>
            {completeChapterProgress}
            <span className='float-right'>{completedChapter.length}/{(totalChapters || 0)} chapters</span>
          </h2>

          <Progress value={completeChapterProgress} className="h-[7px]" />
        </div>
      </div>
    </Link>
  )
}

export default InProgressCourseItem