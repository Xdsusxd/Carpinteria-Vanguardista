import { motion } from "motion/react";
import { Link } from "react-router-dom";
import SectionBadge from "./SectionBadge";
import Footer from "./Footer";

export default function FullGallery() {
  const imageNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17];
  const images = imageNumbers.map(n => `/images/img${n}.jpeg`);

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      {/* Small header with back button */}
      <div className="pt-8 px-6 md:px-10 max-w-7xl mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="text-white/70 hover:text-white flex items-center gap-2 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Volver al Inicio
        </Link>
      </div>

      <section className="py-16 md:py-24 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <SectionBadge text="Galería Completa" />
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-3xl sm:text-4xl md:text-5xl font-normal text-white tracking-tight mb-4"
            >
              Nuestro Trabajo en Detalle
            </motion.h1>
          </div>

          {/* Video Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full aspect-video md:aspect-[21/9] rounded-[2rem] overflow-hidden mb-16 relative bg-white/[0.03] border border-white/[0.06]"
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/video/video2.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-8 left-8">
              <SectionBadge text="Proceso" />
              <h2 className="text-2xl md:text-3xl font-normal text-white mt-2">Tecnología y Precisión</h2>
            </div>
          </motion.div>

          {/* Masonry-like Grid or just a nice grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {images.map((src, index) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
                className="group relative aspect-square rounded-[1.5rem] overflow-hidden bg-white/[0.03] border border-white/[0.06]"
              >
                <img
                  src={src}
                  alt={`Proyecto ${index + 1}`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
