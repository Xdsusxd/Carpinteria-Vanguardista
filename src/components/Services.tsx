import { motion } from "motion/react";
import { Ruler, Hammer, Home, Paintbrush, Layers, Lightbulb } from "lucide-react";
import { services } from "../content";
import SectionBadge from "./SectionBadge";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Ruler,
  Hammer,
  Home,
  Paintbrush,
  Layers,
  Lightbulb,
};

export default function Services() {
  return (
    <section
      id="servicios"
      className="relative w-full py-24 md:py-32 px-6 md:px-10 bg-[#0a0a0a]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <SectionBadge text={services.badge} />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-normal text-white tracking-tight mb-4"
          >
            {services.heading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white/50 text-base md:text-lg max-w-2xl mx-auto"
          >
            {services.subheading}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.items.map((item, index) => {
            const IconComponent = iconMap[item.icon];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative p-6 md:p-8 rounded-[1.5rem] bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm hover:bg-white/[0.06] hover:border-white/10 transition-all duration-500 cursor-default"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/[0.06] border border-white/10 flex items-center justify-center mb-5 group-hover:bg-white/10 group-hover:border-white/15 transition-all duration-500">
                  {IconComponent && (
                    <IconComponent className="w-5 h-5 text-white/70 group-hover:text-white transition-colors duration-500" />
                  )}
                </div>

                <h3 className="text-lg font-normal text-white/90 mb-2 group-hover:text-white transition-colors duration-500">
                  {item.title}
                </h3>
                <p className="text-sm text-white/40 leading-relaxed group-hover:text-white/60 transition-colors duration-500">
                  {item.description}
                </p>

                <div className="absolute inset-0 rounded-[1.5rem] bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
