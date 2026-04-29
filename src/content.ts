// ============================================================
// RIVR — Archivo de contenido centralizado
// Cambia cualquier texto, URL de video/imagen, enlace, etc.
// desde aquí sin tocar los componentes.
// ============================================================

export const content = {
  // ----------------------------------------------------------
  // GLOBAL / BRAND
  // ----------------------------------------------------------
  brand: {
    name: "Carpintería Vanguardista",
    tagline: "Muebles a Medida",
  },

  // ----------------------------------------------------------
  // NAVBAR
  // ----------------------------------------------------------
  navbar: {
    menuItems: [
      { label: "Inicio", hasDropdown: false, href: "#" },
      { label: "Galeria", hasDropdown: true, href: "#" },
      { label: "Contacto", hasDropdown: false, href: "#" },
    ],
    ctaButton: {
      text: "Contacto",
      href: "#",
    },
  },

  // ----------------------------------------------------------
  // HERO SECTION
  // ----------------------------------------------------------
  hero: {
    // Video de fondo — cambia la URL aquí
    videoUrl:
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260428_193507_4286c423-2fd9-4efd-92bd-91a939453fc1.mp4",

    // Badge / pill encima del título
    badge: {
      text: "Muebles a Medida",
    },

    // Título principal
    heading: "Muebles que se adaptan a tu vida",

    // Subtítulo / descripción
    subheading: "Diseñamos y fabricamos muebles únicos para cada espacio, combinando estética, funcionalidad y calidad.",
  },

  // ----------------------------------------------------------
  // BOTTOM LEFT CARD (Stats + CTA)
  // ----------------------------------------------------------
  bottomLeftCard: {
    stat: "CNC",
    statLabel: "Corte y Fabricacion con CNC",
    ctaButton: {
      text: "Contactanos",
      href: "#",
    },
  },

  // ----------------------------------------------------------
  // BOTTOM RIGHT CORNER (Documentation link)
  // ----------------------------------------------------------
  bottomRightCorner: {
    title: "Galeria",
    linkText: "Ver Galeria",
    href: "#",
  },
} as const;

// Exportar secciones individuales para imports más limpios
export const { brand, navbar, hero, bottomLeftCard, bottomRightCorner } = content;
