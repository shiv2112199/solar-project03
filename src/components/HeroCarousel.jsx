import { useEffect, useRef, useState } from "react";

import hero1 from "../assets/images/carousel/hero-1.png";
import hero2 from "../assets/images/carousel/hero-2.jpg";
import hero3 from "../assets/images/carousel/hero-3.png";
import { IoLogoWhatsapp } from "react-icons/io"

export default function HeroCarousel() {
  const slides = [hero1, hero2, hero3];

  const [index, setIndex] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    ref.current = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 4500);

    return () => clearInterval(ref.current);
  }, [slides.length]);

  return (
    <section className="relative">
      {/* ✅ Give height on mobile also */}
      <div className="relative w-full  overflow-hidden h-[420px]  sm:h-[520px] lg:h-screen">
        {slides.map((img, i) => (
          <div
            key={img}
            className={`absolute inset-0 transition-opacity duration-700 ${i === index ? "opacity-100" : "opacity-0"
              }`}
          >
            <img
              src={img}
              alt=""
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/20" />

            <div className="absolute inset-0 flex items-center">
              <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
                <div className="max-w-2xl">
                  <h1 className="text-3xl font-black font-bold  text-white sm:text-4xl md:text-6xl">
                    Save Up to 90% on Electricity Bills with Solar Power
                  </h1>

                  <p className="mt-4 text-sm font-medium text-white/95 sm:text-base md:text-lg">
                     Rooftop solar installation with subsidy support in Indore.
                  </p>

                  <a
                    href="#"
                    className="mt-6 inline-flex rounded-3xl bg-green-400  gap-2 px-12 py-5   text-lg font-medium text-gray-100 hover:opacity-90 sm:px-8"
                  >
                    <IoLogoWhatsapp size={35}/>	Connect to WhatsApp 
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* ✅ Dots visible on mobile also */}
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 md:hidden">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2.5 w-2.5 rounded-full transition-all ${i === index ? "bg-white w-6" : "bg-white/60"
                }`}
            />
          ))}
        </div>

        {/* Desktop thumb dots */}
        <div className="absolute right-6 top-0 hidden h-full flex-col items-center justify-center gap-3 md:flex">
          {slides.map((img, i) => (
            <button
              key={img}
              onClick={() => setIndex(i)}
              className={`relative overflow-hidden rounded-full bg-white shadow-lg transition-all ${i === index ? "h-16 w-16" : "h-11 w-11"
                }`}
            >
              <img src={img} alt="" className="h-full w-full object-cover p-[2px]" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
