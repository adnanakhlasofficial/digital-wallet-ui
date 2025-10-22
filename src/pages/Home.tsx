import CTA from "@/components/Home/CTA";
import FAQ from "@/components/Home/FAQ";
import Features from "@/components/Home/Features";
import Hero from "@/components/Home/Hero";
import Pricing from "@/components/Home/Pricing";
import Security from "@/components/Home/Security";
import Stats from "@/components/Home/Stats";
import Testimonials from "@/components/Home/Testimonials";

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
