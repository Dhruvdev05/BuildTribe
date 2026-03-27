import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import HeroSection from "@/components/landing-page/hero-section";
import FeaturedProducts from "@/components/landing-page/FeaturedProducts";
import RecentlyLaunchedProducts from "@/components/landing-page/recently-launched-products";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedProducts />

      <Suspense fallback={<div>Loading recently launched products...</div>}>
      <RecentlyLaunchedProducts />
      </Suspense>
    </>
  
 
  );
}
