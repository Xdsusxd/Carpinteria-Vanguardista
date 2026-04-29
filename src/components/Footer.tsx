import { motion } from "motion/react";
import { brand, footer, navbar } from "../content";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative w-full px-6 md:px-10 pt-16 pb-8 bg-[#0a0a0a] border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl md:text-3xl font-normal text-white tracking-tight mb-2">
              {brand.name}
            </h3>
            <p className="text-white/40 text-sm max-w-xs">
              {brand.tagline} — Diseño, fabricación e instalación de mobiliario único.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-wrap gap-6 md:gap-8"
          >
            {navbar.menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white/40 hover:text-white/80 transition-colors text-sm"
              >
                {item.label}
              </a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex gap-3"
          >
            {footer.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                {...(social.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] text-white/50 text-xs hover:bg-white/10 hover:text-white/80 hover:border-white/15 transition-all duration-300 flex items-center gap-2"
              >
                {social.label}
                <ArrowUpRight className="w-3 h-3" />
              </a>
            ))}
          </motion.div>
        </div>

        <div className="w-full h-px bg-white/[0.06] mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <p className="text-white/25 text-xs">{footer.copyright}</p>
            <span className="text-white/15 text-xs">·</span>
            <p className="text-white/25 text-xs">{footer.desarrolladoPor}</p>
          </div>
          <a
            href="#inicio"
            className="text-white/30 hover:text-white/60 text-xs flex items-center gap-1 transition-colors"
          >
            Volver arriba ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
