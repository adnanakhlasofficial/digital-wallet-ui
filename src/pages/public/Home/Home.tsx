import CTA from "@/pages/public/Home/CTA";
import FAQ from "@/pages/public/Home/FAQ";
import Features from "@/pages/public/Home/Features";
import Hero from "@/pages/public/Home/Hero";
import Pricing from "@/pages/public/Home/Pricing";
import Security from "@/pages/public/Home/Security";
import Stats from "@/pages/public/Home/Stats";
import Testimonials from "@/pages/public/Home/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Pricing />
      <Security />
      <Stats />
      <FAQ />
      <Testimonials />
      <CTA />
    </>
  );
}
