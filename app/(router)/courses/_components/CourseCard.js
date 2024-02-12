import Image from 'next/image'

const CourseCard = ({ course }) => {
  const { banner, name, author, free, chapter } = course || {};
  const { url } = banner || {}

  return (
    <div className='border rounded-t-xl rounded-b-sm cursor-pointer hover:shadow-md hover:shadow-purple-300'>
      <Image src={url || ""} width={500} height={150} alt={name} className='rounded-t-xl' />
      <div className='flex flex-col gap-1 p-1'>
        <h2 className='font-medium'>
          {name}
        </h2>
        <h2 className='text-[12px] text-gray-400'>
          {author}
        </h2>

        <div className='flex gap-2'>
          <Image src={chapter.length ? "/chapter.webp" : "/youtube.webp"} alt='youtube' width={20} height={20} />
          <h2 className='text-[14px] text-gray-400'>
            {chapter.length ? "Chapters" : "Watch on Youtube"}
          </h2>
        </div>

        <h2 className='text-[15px]'>
          {free ? "Free" : "Paid"}
        </h2>
      </div>
    </div>
  )
}

export default CourseCard