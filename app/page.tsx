import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ForWhom from "@/components/ForWhom";
import HowItWorks from "@/components/HowItWorks";
import About from "@/components/About";
import PracticalInfo from "@/components/PracticalInfo";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <ForWhom />
      <HowItWorks />
      <About />
      <PracticalInfo />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}
