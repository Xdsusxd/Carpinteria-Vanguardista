import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

interface SectionBadgeProps {
  text: string;
}

export default function SectionBadge({ text }: SectionBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mx-auto mb-4 w-fit"
    >
      <Sparkles className="w-4 h-4 text-white/60" />
      <span className="text-[13px] font-normal text-white/70 uppercase tracking-wider">
        {text}
      </span>
    </motion.div>
  );
}
