import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import FeatureStrip from "@/components/FeatureStrip";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import FloatingWA from "@/components/FloatingWA";
import Cursor from "@/components/Cursor";
import JsLoader from "@/components/JsLoader";

export default function Home() {
  return (
    <>
      <JsLoader />
      <Cursor />
      <FloatingWA />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <FeatureStrip />
        <Services />
        <Process />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
