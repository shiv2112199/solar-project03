import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Navbar from "../components/Navbar";
import HeroCarousel from "../components/HeroCarousel";
import About from "../components/About";
import Services from "../components/Services";
import Quote from "../components/Quote";
import Team from "../components/Team";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import WhyChooseUs from "../components/WhyChooseUs";

export default function HomePage() {
  const [loading, setLoading] = useState(true);
  const [isSticky, setIsSticky] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 250);

    const onScroll = () => {
      const y = window.scrollY || 0;
      setIsSticky(y > 300);
      setShowTop(y > 300);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      clearTimeout(t);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="font-sans text-slate-700">
      <Spinner loading={loading} />

      <Navbar isSticky={isSticky} />

      <section id="home">
        <HeroCarousel />
      </section>

      <section id="about">
        <About />
      </section>

      <section >
        <WhyChooseUs />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="quote">
        <Quote />
      </section>

      <section id="team">
        <Team />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />

      <BackToTop show={showTop} />
    </div>
  );
}
