import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import HeroSection from "@/components/landing-page/hero-section";
import FeaturedProducts from "@/components/landing-page/FeaturedProducts";

export default function Home() {
  return (
   <HeroSection />
    <FeaturedProducts />
 
  );
}
