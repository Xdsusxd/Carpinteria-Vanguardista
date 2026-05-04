import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

interface SectionBadgeProps {
  text: string;
  theme?: 'dark' | 'light';
}

export default function SectionBadge({ text, theme = 'dark' }: SectionBadgeProps) {
  const isLight = theme === 'light';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md mx-auto mb-4 w-fit border ${
        isLight ? 'bg-black/5 border-black/10' : 'bg-white/5 border-white/10'
      }`}
    >
      <Sparkles className={`w-4 h-4 ${isLight ? 'text-black/60' : 'text-white/60'}`} />
      <span className={`text-[13px] font-normal uppercase tracking-wider ${isLight ? 'text-black/70' : 'text-white/70'}`}>
        {text}
      </span>
    </motion.div>
  );
}
