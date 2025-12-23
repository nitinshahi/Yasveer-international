import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Story from "@/components/Story";
import ProductRange from "@/components/ProductRange";
import Culture from "@/components/Culture";
import CoreValues from "@/components/CoreValues";
import EndToEnd from "@/components/EndToEnd";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import CtaBand from "@/components/CtaBand";
import Enquiry from "@/components/Enquiry";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Story />
        <ProductRange />
        <Culture />
        <CoreValues />
        <EndToEnd />
        <WhyUs />
        <Testimonials />
        <CtaBand />
        <Enquiry />
      </main>
      <Footer />
    </>
  );
}
