"use client";
import { useEffect } from "react";
import { UserButton, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const Page = () => {
  const { user, isLoaded } = useUser()
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push('/dashboard')
    } else {
      isLoaded && router.push('/courses')
    }
  }, [user]);

  return (
    <div>
      <UserButton afterSignOutUrl="/sign-in" />
    </div>
  )
}

export default Page