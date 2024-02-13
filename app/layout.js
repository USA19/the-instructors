"use client";
import { Outfit } from "next/font/google";
import { ClerkProvider } from '@clerk/nextjs'
import { Toaster } from "@/components/ui/sonner";

import "./globals.css";

const inter = Outfit({ subsets: ["latin"] });

// export const metadata = {
//   title: "The Instructors",
//   description: "Where Learning Happens",
// };

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          {children}
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
