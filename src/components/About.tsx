import { motion } from "motion/react";
import { about } from "../content";
import SectionBadge from "./SectionBadge";

export default function About() {
  return (
    <section
      id="nosotros"
      className="relative w-full py-24 md:py-32 px-6 md:px-10 bg-[#0a0a0a]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Text */}
          <div>
            <SectionBadge text={about.badge} />
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-normal text-white tracking-tight mb-6 lg:text-left text-center"
            >
              {about.heading}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-white/50 text-base md:text-lg leading-relaxed mb-10 lg:text-left text-center"
            >
              {about.description}
            </motion.p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {about.stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="text-center lg:text-left"
                >
                  <span className="text-3xl md:text-4xl font-normal text-white block mb-1">
                    {stat.value}
                  </span>
                  <span className="text-[11px] md:text-xs text-white/40 uppercase tracking-wider">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right — Visual element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-[4/5] rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-white/[0.03] border border-white/[0.06]"
          >
            {/* Abstract design element */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-white/[0.02]" />
            
            {/* Concentric circles decoration */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                {[1, 2, 3, 4].map((ring) => (
                  <motion.div
                    key={ring}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1,
                      delay: 0.3 + ring * 0.15,
                      ease: "easeOut",
                    }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06]"
                    style={{
                      width: `${ring * 80}px`,
                      height: `${ring * 80}px`,
                    }}
                  />
                ))}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="relative w-16 h-16 rounded-full bg-white/10 border border-white/15 flex items-center justify-center"
                >
                  <span className="text-white/60 text-2xl font-normal">CV</span>
                </motion.div>
              </div>
            </div>

            {/* Bottom gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#0a0a0a]/60 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
