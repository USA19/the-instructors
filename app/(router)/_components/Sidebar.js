"use client"
import Image from 'next/image'
import Link from "next/link"
import { BookOpen, BadgeIcon, GraduationCap, LayoutGrid, Mail } from "lucide-react";
import { useUser } from "@clerk/nextjs";

const Sidebar = () => {
  const { user } = useUser()

  const menu = [
    {
      id: 0,
      name: "Dashboard",
      icon: LayoutGrid,
      path: '/dashboard',
      auth: user
    },

    {
      id: 1,
      name: "All Courses",
      icon: BookOpen,
      path: '/courses',
      auth: true
    },

    {
      id: 2,
      name: "Membership",
      icon: BadgeIcon,
      path: '/courses',
      auth: true
    },

    {
      id: 3,
      name: "Be Instructor",
      icon: GraduationCap,
      path: '/courses',
      auth: true
    },

    {
      id: 4,
      name: "News Letter",
      icon: Mail,
      path: '/courses',
      auth: true
    },
  ];

  return (
    <div className='p-5 bg-white shadow-sm border h-screen'>
      <Image src='/logo.svg' alt='LogoIpsum' width={170} height={80} />
      <hr className='mt-7' />
      {/* menu list */}
      <div className='mt-5'>
        {menu.map((menuItem) => {
          const { id, icon: Icon, name, auth, path } = menuItem
          return auth && (
            <Link href={path}>
              <div key={id} className={`group flex gap-3 mt-1 p-3 text-[18px] items-center
               text-gray-500 cursor-pointer hover:bg-primary hover:text-white 
               rounded-md transition-all ease-in-out duration-200
               `}>
                <Icon className='group-hover:animate-bounce' />
                <h2>{name}</h2>
              </div>
            </Link>
          )
        })}
      </div>
    </div >
  )
}

export default Sidebar