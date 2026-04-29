const WHATSAPP_NUMBER = "5215551234567";
const WHATSAPP_MESSAGE = "Hola, me interesa cotizar un mueble a medida.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export const content = {
  brand: {
    name: "Carpintería Vanguardista",
    tagline: "Muebles a Medida",
  },

  whatsapp: {
    url: WHATSAPP_URL,
    number: WHATSAPP_NUMBER,
  },

  navbar: {
    menuItems: [
      { label: "Inicio", hasDropdown: false, href: "#inicio" },
      { label: "Servicios", hasDropdown: false, href: "#servicios" },
      { label: "Galería", hasDropdown: false, href: "#galeria" },
      { label: "Contacto", hasDropdown: false, href: WHATSAPP_URL },
    ],
    ctaButton: {
      text: "Cotizar",
      href: WHATSAPP_URL,
    },
  },

  hero: {
    videoUrl: "/video/video.mp4",

    badge: {
      text: "Muebles a Medida",
    },

    heading: "Muebles que se adaptan a tu vida",

    subheading:
      "Diseño, fabricación y montaje de muebles para cada espacio, combinando estética, funcionalidad y calidad.",
  },

  bottomLeftCard: {
    stat: "CNC",
    statLabel: "Corte y Fabricación con CNC",
    ctaButton: {
      text: "Contacto",
      href: WHATSAPP_URL,
    },
  },

  bottomRightCorner: {
    title: "Galería",
    linkText: "Ver Galería",
    href: "#galeria",
  },

  services: {
    badge: "Servicios",
    heading: "Servicios",
    subheading:
      "Cada proyecto es único.",
    items: [
      {
        icon: "Ruler",
        title: "Diseño",
        description:
          "Creacion de muebles personalizados que se adaptan perfectamente a tu espacio y estilo de vida.",
      },
      {
        icon: "Hammer",
        title: "Fabricación CNC",
        description:
          "Tecnología de corte CNC para precisión milimétrica en cada pieza.",
      },
      {
        icon: "Home",
        title: "Instalación Profesional",
        description:
          "Armado de muebles con precisión",
      },
      {
        icon: "Paintbrush",
        title: "Acabados Premium",
        description:
          "Lacados, barnices y tintes de alta calidad para un resultado duradero y elegante.",
      },
      {
        icon: "Layers",
        title: "Materiales Selectos",
        description:
          "Trabajo hecho con materiales de alta calidad",
      },
      {
        icon: "Lightbulb",
        title: "Asesoría de Diseño",
        description:
          "Asesoria profesional para la eleccion de materiales, colores y diseños para tu proyecto.",
      },
    ],
  },

  gallery: {
    badge: "Trabajos",
    heading: "Trabajos Realizados",
    subheading:
      "Explora algunos de los proyectos más recientes y descubre la calidad del trabajo realizado.",
    items: [
      {
        title: "Mesa de Comedor",
        category: "Comedores",
        image: "/gallery/dining.jpg",
      },
      {
        title: "Librería Integrada",
        category: "Estanterías",
        image: "/gallery/bookshelf.jpg",
      },
      {
        title: "Cocina Moderna",
        category: "Cocinas",
        image: "/gallery/kitchen.jpg",
      },
      {
        title: "Vestidor a Medida",
        category: "Vestidores",
        image: "/gallery/wardrobe.jpg",
      },
      {
        title: "Escritorio Home Office",
        category: "Oficinas",
        image: "/gallery/desk.jpg",
      },
      {
        title: "Mueble de Baño",
        category: "Baños",
        image: "/gallery/bathroom.jpg",
      },
    ],
  },

  footer: {
    copyright: "© 2026 Carpinteria Vanguardista.",
    desarrolladoPor: "Desarrollado por GomaDesign",
    socials: [
      { label: "Instagram", href: "#" },
      { label: "Facebook", href: "#" },
      { label: "WhatsApp", href: WHATSAPP_URL },
    ],
  },
} as const;

export const {
  brand,
  navbar,
  hero,
  bottomLeftCard,
  bottomRightCorner,
  services,
  gallery,
  footer,
} = content;
