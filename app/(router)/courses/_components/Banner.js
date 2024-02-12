import Image from 'next/image'

const Banner = () => {
  return (
    <div className='flex gap-5 items-center bg-white rounded-xl p-5'>
      <Image src='/panda.webp' alt='panda' width={100} height={100} />
      <div>
        <h2 className='font-bold text-[27px]'>Welcome to the <span className='text-primary'>Learners</span></h2>
        <h2 className='text-gray-400'>Explore, Learn and Build All Real Life Projects</h2>
      </div>
    </div>
  )
}

export default Banner