import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import { hero } from "../content";

export default function HeroBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 mx-auto mb-3 w-fit"
    >
      <Sparkles className="w-4 h-4 text-white/80" />
      <span className="text-[14px] font-normal text-white/90">
        {hero.badge.text}
      </span>
    </motion.div>
  );
}
