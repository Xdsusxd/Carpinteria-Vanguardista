import { motion } from "motion/react";
import { gallery } from "../content";
import SectionBadge from "./SectionBadge";
import { useState } from "react";

export default function Gallery() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="galeria"
      className="relative w-full py-24 md:py-32 px-6 md:px-10 bg-[#0a0a0a]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <SectionBadge text={gallery.badge} />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-normal text-white tracking-tight mb-4"
          >
            {gallery.heading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white/50 text-base md:text-lg max-w-2xl mx-auto"
          >
            {gallery.subheading}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {gallery.items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative aspect-[4/5] rounded-[1.5rem] overflow-hidden cursor-pointer bg-white/[0.03] border border-white/[0.06]"
            >
              <div
                className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105"
                style={{
                  background: `linear-gradient(${135 + index * 30}deg, rgba(255,255,255,${0.03 + index * 0.01}), rgba(255,255,255,${0.08 + index * 0.005}), rgba(255,255,255,${0.02 + index * 0.01}))`,
                }}
              />

              <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                <div
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full border border-white/20"
                  style={{ background: `radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)` }}
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                <motion.div
                  animate={{ y: hoveredIndex === index ? 0 : 8, opacity: hoveredIndex === index ? 1 : 0.7 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-[11px] font-normal text-white/50 uppercase tracking-widest">
                    {item.category}
                  </span>
                  <h3 className="text-lg md:text-xl font-normal text-white mt-1">
                    {item.title}
                  </h3>
                </motion.div>
              </div>

              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <svg className="w-3 h-3 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
