const WHATSAPP_NUMBER = "2411678134";
const WHATSAPP_MESSAGE = "Hola, me interesa cotizar...";
const WHATSAPP_URL = `https://wa.me/${2411678134}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

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
        title: "",
        category: "",
        image: "/images/img1.jpeg",
      },
      {
        title: "",
        category: "",
        image: "/images/img14.jpeg",
      },
      {
        title: "",
        category: "",
        image: "/images/img3.jpeg",
      },
      {
        title: "",
        category: "",
        image: "/images/img16.jpeg",
      },
      {
        title: "",
        category: "",
        image: "/images/img10.jpeg",
      },
      {
        title: "",
        category: "",
        image: "/images/img9.jpeg",
      },
    ],
  },

  footer: {
    copyright: "© 2026 Carpinteria Vanguardista.",
    desarrolladoPor: "Desarrollado por el SusGoma",
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
