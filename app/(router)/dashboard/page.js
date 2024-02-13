"use client";
import { useUser } from "@clerk/nextjs";
import WelcomeBannerDashboard from './_components/WelcomeBannerDashboard'
import SideBanner from "../courses/_components/SideBanner";
import InProgressCourseList from "./_components/InProgressCourseList";

const Dashboard = () => {
  const { user } = useUser();

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 p-5 gap-4'>
      {/* Left Container */}
      <div className='col-span-2'>
        <WelcomeBannerDashboard user={user} />
        <InProgressCourseList user={user} />
      </div>

      <div className='p-5 bg-white rounded-xl'>
        <SideBanner />
      </div>
    </div>
  )
}

export default Dashboard