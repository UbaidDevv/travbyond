import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Packages from "@/components/sections/Packages";
import Destinations from "@/components/sections/Destinations";
import WhyChoose from "@/components/sections/WhyChoose";
import Services from "@/components/sections/Services";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import ContactPreview from "@/components/sections/ContactPreview";
import Separator from "@/components/ui/Separator";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Separator variant="wave" />
      <About />
      <Separator variant="descend" />
      <Packages />
      <Separator variant="rise" />
      <Destinations />
      <Separator variant="pulse" />
      <WhyChoose />
      <Separator variant="wave" />
      <Services />
      <Separator variant="descend" />
      <Gallery />
      <Separator variant="rise" />
      <Testimonials />
      <CTA />
      <Separator variant="pulse" />
      <ContactPreview />
      <Footer />
    </main>
  );
}
