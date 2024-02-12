import Banner from './_components/Banner'
import CourseList from './_components/CourseList'
import SideBanner from './_components/SideBanner'

const Courses = async () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 p-5 gap-4'>
      {/* Left Container */}
      <div className='col-span-2'>
        <Banner />
        {/*  Course List*/}
        <CourseList />
      </div>

      <div className='p-5 bg-white rounded-xl'>
        <SideBanner />
      </div>
    </div>
  )
}

export default Courses