import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { navbar, brand } from "../content";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between py-6 px-6 md:px-10 w-full relative z-10">
      <div className="flex items-center gap-3">
        <span className="font-normal tracking-tight text-lg text-white/90">
          {brand.name}
        </span>
      </div>

      <div className="flex-1 hidden md:block" />

      <ul className="hidden md:flex items-center gap-8 text-white/80 font-normal text-sm">
        {navbar.menuItems.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              {...(item.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="cursor-pointer hover:text-white transition-colors"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex-1 flex justify-end items-center gap-3">
        <button
          className="md:hidden text-white/80 p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        <motion.a
          href={navbar.ctaButton.href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="hidden md:flex items-center bg-white text-black rounded-full pl-2 pr-5 py-1.5 gap-2 hover:bg-white/90 transition-colors group"
        >
          <div className="bg-black/10 p-1 rounded-full flex items-center justify-center">
            <ArrowUpRight className="w-4 h-4 text-black" />
          </div>
          <span className="text-sm font-normal">{navbar.ctaButton.text}</span>
        </motion.a>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-t border-white/10 rounded-b-2xl p-6 flex flex-col gap-4 md:hidden"
        >
          {navbar.menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              {...(item.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              onClick={() => setMobileOpen(false)}
              className="text-white/80 hover:text-white text-lg transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href={navbar.ctaButton.href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="flex items-center justify-center bg-white text-black rounded-full py-3 mt-2 font-normal hover:bg-white/90 transition-colors"
          >
            {navbar.ctaButton.text}
          </a>
        </motion.div>
      )}
    </nav>
  );
}
