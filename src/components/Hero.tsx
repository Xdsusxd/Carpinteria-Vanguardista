import { motion } from "motion/react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { hero } from "../content";
import Navbar from "./Navbar";
import HeroBadge from "./HeroBadge";
import BottomLeftCard from "./BottomLeftCard";
import BottomRightCorner from "./BottomRightCorner";

export default function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (headingRef.current && !headingRef.current.dataset.animated) {
      headingRef.current.dataset.animated = "true";
      const text = headingRef.current.innerText;
      headingRef.current.innerHTML = "";
      
      const chars = text.split("");
      chars.forEach((char) => {
        const span = document.createElement("span");
        span.style.display = "inline-block";
        span.style.opacity = "0";
        span.style.transform = "translateY(30px) scale(0.9)";
        span.innerText = char === " " ? "\u00A0" : char;
        headingRef.current?.appendChild(span);
      });

      gsap.to(headingRef.current.children, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.04,
        ease: "power3.out",
        delay: 0.2
      });
    }
  }, []);

  return (
    <div
      id="inicio"
      className="w-full h-screen flex items-center justify-center p-3 md:p-5 bg-[#0a0a0a]"
    >
      <section className="relative w-full max-w-[1536px] h-full rounded-[1.5rem] md:rounded-[3rem] overflow-hidden shadow-none flex flex-col items-center bg-black/20 group">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-[65%] lg:object-center z-0 brightness-[0.6]"
        >
          <source src={hero.videoUrl} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 z-[1]" />

        <div className="relative z-10 w-full h-full flex flex-col items-center">
          <Navbar />

          <div className="w-full flex flex-col items-center pt-8 px-6 text-center max-w-4xl">
            <HeroBadge />

            <h1
              ref={headingRef}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[80px] font-normal text-white mb-2 tracking-tight leading-[1.05]"
            >
              {hero.heading}
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-sm sm:text-base md:text-lg text-white/70 leading-relaxed max-w-xl font-normal"
            >
              {hero.subheading}
            </motion.p>
          </div>

          <BottomLeftCard />
          <BottomRightCorner />
        </div>
      </section>
    </div>
  );
}
