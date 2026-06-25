import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import TrustedLogos from "@/components/sections/TrustedLogos";
import Features from "@/components/sections/Features";
import FeatureHighlights from "@/components/sections/FeatureHighlights";
import Integrations from "@/components/sections/Integrations";
import Statistics from "@/components/sections/Statistics";
import HowItWorks from "@/components/sections/HowItWorks";
import Testimonials from "@/components/sections/Testimonials";
import Resources from "@/components/sections/Resources";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import DataSecurity from "@/components/sections/DataSecurity";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <FeatureHighlights />
        <Pricing />
        <CTA />
        <DataSecurity />
        <TrustedLogos />
        <Integrations />
        <Testimonials />
        {/* <HowItWorks />
        <Features />
        <Statistics />
        <Resources />
        <FAQ /> */}
      </main>
      <Footer />
    </>
  );
}
