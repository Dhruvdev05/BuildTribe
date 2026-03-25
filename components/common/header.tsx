"use client";

import Link from "next/link"
import { SparklesIcon, HomeIcon, CompassIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useUser, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs"

export default function Header() {
  const { isSignedIn } = useUser();

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
      <div className="wrapper px-12">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="size-8 rounded-lg bg-primary flex items-center justify-center">
              <SparklesIcon className="size-4 text-white" />
            </div>
            <span className="text-xl font-bold">
              <span className="text-primary">Build</span>Tribe
            </span>
          </Link>

          {/* Nav */}
          <nav className="flex items-center gap-1">
            <Link href="/" className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-muted/50">
              <HomeIcon className="size-4" />
              Home
            </Link>

            <Link href="/explore" className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-muted/50">
              <CompassIcon className="size-4" />
              Explore
            </Link>
          </nav>

          {/* Auth Section */}
          <div className="flex items-center gap-3">

            {!isSignedIn ? (
              <>
                <SignInButton mode="modal">
                  <Button variant="ghost">Sign In</Button>
                </SignInButton>

                <SignUpButton mode="modal">
                  <Button className="bg-[#6c47ff] text-white rounded-full">
                    Sign Up
                  </Button>
                </SignUpButton>
              </>
            ) : (
              <>
                <Link href="/submit">
                  <Button variant="ghost" className="flex gap-2">
                    <SparklesIcon className="size-4" />
                    Submit Project
                  </Button>
                </Link>

                <UserButton />
              </>
            )}

          </div>
        </div>
      </div>
    </header>
  )
}