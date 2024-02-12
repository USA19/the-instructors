"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button";
import { Search, BellDot } from "lucide-react";
import { UserButton, useUser } from "@clerk/nextjs";

const Header = () => {
  const { user, isLoaded } = useUser()

  return (
    <div className="p-4 bg-white flex justify-between">
      {/* search bar */}
      <div className="flex gap-2 border rounded-md p-2">
        <Search className="h-5 w-5" />
        <input placeholder="search..." type="text" className="outline-none " />
      </div>
      {/* bell icon */}
      <div className="flex items-center gap-4">
        <BellDot />
        {user && isLoaded ? <UserButton afterSignOutUrl="/courses" /> :
          <Link href='/sign-in'>
            <Button>Get Started</Button>
          </Link>}
      </div>
    </div>
  )
}

export default Header