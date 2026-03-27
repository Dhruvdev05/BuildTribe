"use client";

import Link from "next/link";
import { SparklesIcon, HomeIcon, CompassIcon, LoaderIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useUser, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { Suspense } from "react";

function AuthSection() {
  const { isSignedIn } = useUser();

  if (isSignedIn === undefined) {
    return (
      <div className="flex items-center gap-3">
        <LoaderIcon className="animate-spin size-5" />
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3">
      {!isSignedIn ? (
        <>
          <SignInButton mode="modal">
            <Button variant="ghost">Sign In</Button>
          </SignInButton>

          <SignUpButton mode="modal">
            <Button>Sign Up</Button>
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
  );
}

export default function Header() {
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

          {/* Auth Section with Suspense */}
          <Suspense
            fallback={
              <div className="flex items-center gap-3">
                <LoaderIcon className="animate-spin size-5" />
              </div>
            }
          >
            <AuthSection />
          </Suspense>

        </div>
      </div>
    </header>
  );
}