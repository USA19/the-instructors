import Image from 'next/image';

const WelcomeBannerDashboard = ({ user }) => {
  const { firstName = "" } = user ? user : {}

  return (
    <div className='flex gap-5 items-center bg-white rounded-xl p-5'>
      <Image src='/panda.webp' alt='panda' width={100} height={100} />
      <div>
        <h2 className='font-bold text-[27px]'>Welcome Back <span className='text-primary'>{firstName || ""}</span></h2>
        <h2 className='text-gray-400'>Let's keep it and up improve your progress!</h2>
      </div>
    </div>
  )
}

export default WelcomeBannerDashboard 