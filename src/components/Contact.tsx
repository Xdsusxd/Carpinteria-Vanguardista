import { motion } from "motion/react";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import { contact } from "../content";
import SectionBadge from "./SectionBadge";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  MapPin,
  Phone,
  Mail,
};

export default function Contact() {
  return (
    <section
      id="contacto"
      className="relative w-full py-24 md:py-32 px-6 md:px-10 bg-[#0a0a0a]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <SectionBadge text={contact.badge} />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-normal text-white tracking-tight mb-4"
          >
            {contact.heading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white/50 text-base md:text-lg max-w-2xl mx-auto"
          >
            {contact.subheading}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-10">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3 p-6 md:p-10 rounded-[1.5rem] md:rounded-[2rem] bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <input
                  type="text"
                  placeholder={contact.formFields.name}
                  className="w-full px-5 py-4 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white/90 text-sm placeholder:text-white/30 focus:outline-none focus:border-white/20 focus:bg-white/[0.06] transition-all duration-300"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder={contact.formFields.email}
                  className="w-full px-5 py-4 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white/90 text-sm placeholder:text-white/30 focus:outline-none focus:border-white/20 focus:bg-white/[0.06] transition-all duration-300"
                />
              </div>
            </div>
            <div className="mb-4">
              <input
                type="tel"
                placeholder={contact.formFields.phone}
                className="w-full px-5 py-4 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white/90 text-sm placeholder:text-white/30 focus:outline-none focus:border-white/20 focus:bg-white/[0.06] transition-all duration-300"
              />
            </div>
            <div className="mb-6">
              <textarea
                rows={5}
                placeholder={contact.formFields.message}
                className="w-full px-5 py-4 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white/90 text-sm placeholder:text-white/30 focus:outline-none focus:border-white/20 focus:bg-white/[0.06] transition-all duration-300 resize-none"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              type="submit"
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white text-black rounded-full px-8 py-4 hover:bg-white/90 transition-colors group"
            >
              <span className="text-sm font-normal">
                {contact.formFields.submit}
              </span>
              <div className="bg-black/10 p-1 rounded-full flex items-center justify-center">
                <ArrowUpRight className="w-4 h-4 text-black group-hover:rotate-45 transition-transform duration-300" />
              </div>
            </motion.button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            {contact.info.map((item, index) => {
              const IconComponent = iconMap[item.icon];
              return (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="p-5 md:p-6 rounded-[1.2rem] bg-white/[0.03] border border-white/[0.06] flex items-center gap-4 hover:bg-white/[0.05] hover:border-white/10 transition-all duration-500 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/10 transition-all duration-500">
                    {IconComponent && (
                      <IconComponent className="w-5 h-5 text-white/60 group-hover:text-white/80 transition-colors duration-500" />
                    )}
                  </div>
                  <span className="text-sm text-white/60 group-hover:text-white/80 transition-colors duration-500">
                    {item.text}
                  </span>
                </motion.div>
              );
            })}

            {/* Decorative card */}
            <div className="flex-1 min-h-[120px] p-6 rounded-[1.2rem] bg-white/[0.03] border border-white/[0.06] flex items-center justify-center">
              <div className="text-center">
                <p className="text-white/30 text-xs uppercase tracking-widest mb-2">
                  Horario
                </p>
                <p className="text-white/70 text-sm">Lun - Vie: 9:00 - 18:00</p>
                <p className="text-white/70 text-sm">Sáb: 9:00 - 14:00</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
