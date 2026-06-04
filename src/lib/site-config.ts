export const siteConfig = {
  name: "Total Assist",
  domain: "totalclaimassist.com",
  phone: "(55) 6145 5557",
  phoneRaw: "525561455557",
  whatsappUrl: "https://wa.me/525561455557",
  hours: "Lunes a Viernes, 08:00 a 18:00",
  email: "contacto@totalclaimassist.com",
  yearsExperience: 27,
  freeUntil: "diciembre 2026",
  appUrl: process.env.NEXT_PUBLIC_TOTALASSIST_APP_URL || "https://totalclaimassist.app",
};

export const beneficiosHero = [
  "Integramos correctamente expedientes",
  "Damos seguimiento continuo con la aseguradora",
  "Mantenemos comunicación ordenada con el asegurado",
  "Acompañamos técnicamente durante el proceso",
  "Reducimos errores administrativos y agilizamos el reclamo",
];

export const extensionBeneficios = [
  {
    title: "Liberas tiempo operativo",
    body: "Dejas de invertir horas en llamadas, seguimientos y trámites repetitivos.",
  },
  {
    title: "Te enfocas en vender",
    body: "Tu cartera crece mientras nosotros sostenemos la operación de los siniestros.",
  },
  {
    title: "Atiendes mejor a tu cliente",
    body: "Respuestas rápidas, expedientes completos y comunicación clara con el asegurado.",
  },
  {
    title: "Te posicionas como asesor confiable",
    body: "Tu cliente percibe un servicio de respaldo profesional, no un agente apagando incendios.",
  },
];

export const consumoTiempo = [
  "Llamadas constantes con la aseguradora",
  "Seguimiento repetitivo de cada etapa",
  "Revisión documental e interpretación de pólizas",
  "Integración de expedientes",
  "Manejo emocional del asegurado",
  "Presión por resolver con urgencia",
];

export const riesgosMalaGestion = [
  "Retrasos innecesarios",
  "Expedientes incompletos",
  "Errores en la documentación",
  "Mala comunicación con el asegurado",
  "Incertidumbre durante el proceso",
  "Desgaste en la relación con tu cliente",
  "Pérdida de confianza y de cartera",
];

export const proceso = [
  {
    step: "01",
    title: "Primer aviso",
    body: "Recibimos el siniestro de tu parte y abrimos el expediente.",
  },
  {
    step: "02",
    title: "Integración del expediente",
    body: "Reunimos documentación, validamos pólizas y preparamos lo que la aseguradora requiere.",
  },
  {
    step: "03",
    title: "Gestión continua",
    body: "Damos seguimiento, empujamos tiempos y mantenemos a tu cliente informado.",
  },
  {
    step: "04",
    title: "Resolución",
    body: "Llegamos a la indemnización o cierre, y te entregamos el caso resuelto.",
  },
];

export const faqs = [
  {
    q: "¿Total Assist sustituye al agente?",
    a: "No. Actuamos en tu nombre. Tú sigues siendo el punto de contacto y el asesor principal de tu cliente; nosotros operamos detrás como respaldo profesional.",
  },
  {
    q: "¿Cuánto cuesta el servicio?",
    a: "El servicio es gratuito hasta diciembre de 2026 para los agentes que se registren durante este periodo.",
  },
  {
    q: "¿Qué tipo de siniestros atienden?",
    a: "Todos los ramos. No nos limitamos a gastos médicos: atendemos auto, hogar, daños, vida, transporte y más.",
  },
  {
    q: "¿El asegurado sabrá que ustedes están detrás?",
    a: "No. Operamos como una extensión transparente de tu servicio. Tu cliente percibe que tú resolviste.",
  },
  {
    q: "¿En qué momento intervienen?",
    a: "Desde el primer aviso del siniestro hasta la resolución final del expediente.",
  },
];

export const sedes = [
  {
    city: "Culiacán",
    label: "Corporativo",
    address:
      "Blvd. Enrique Sánchez Alonso #2249, Parque Alameda, CP 80030",
  },
  {
    city: "Ciudad de México",
    label: "CDMX",
    address:
      "Prolongación Paseo de la Reforma #1015, Torre A, Piso 1, Santa Fe, CP 01376",
  },
  {
    city: "Monterrey",
    label: "MTY",
    address:
      "Av. Batallón de San Patricio #111, Torre ING, Piso 26, CP 66269",
  },
];

export const servicios = [
  "Gestión de siniestros",
  "Consultoría en seguros",
  "Conferencias y capacitaciones",
];

// ─────────────────────────────────────────────────────────────────────────────
//  Home corporativo (/)
// ─────────────────────────────────────────────────────────────────────────────

export const homeHero = {
  eyebrow: "Aliado estratégico para agentes de seguros",
  titlePrimary: "Somos el aliado estratégico que te respalda cuando tu cliente",
  titleAccent: "presenta un siniestro",
  subtitle:
    "Total Assist gestiona las reclamaciones de seguro de tus clientes en tu nombre, para que tú sigas enfocado en hacer crecer tu cartera.",
  bullets: [
    "Reduce tu carga operativa",
    "Ofrece respaldo sólido a tus clientes en sus reclamaciones",
    "Concéntrate en hacer crecer tu cartera",
  ],
  ctaPrimary: { label: "Conoce nuestros servicios", href: "#servicios" },
  ctaSecondary: { label: "Habla con un asesor", href: "#contacto" },
};

export const homeMomento = {
  eyebrow: "Tu servicio se pone a prueba",
  title: "El momento del siniestro define la percepción de tu servicio",
  body: "Cuando ocurre un siniestro, tu cliente espera claridad, acompañamiento y resultados. Total Assist interviene desde el inicio del proceso de reclamación para integrar correctamente el expediente, dar seguimiento profesional y mantener una comunicación ordenada durante todo el trámite.",
  highlight:
    "Tú siempre mantienes la relación con tu asegurado. Nosotros gestionamos el proceso de reclamación.",
  credential:
    "Más de 27 años de experiencia en la gestión de reclamaciones de seguros respaldan a nuestro equipo.",
};

export const homeFuncionamiento = {
  eyebrow: "Cómo funciona Total Assist",
  title: "Respaldo profesional en la gestión del reclamo",
  intro:
    "Cuando tu cliente sufre un siniestro, te contacta a ti. Tú ingresas a nuestra plataforma, capturas la información de la póliza y registras el siniestro. A partir de ese momento nosotros nos hacemos cargo de:",
  steps: [
    {
      title: "Integrar correctamente el expediente",
      body: "Reunimos documentación, validamos pólizas y preparamos lo que la aseguradora requiere para no detener el trámite.",
    },
    {
      title: "Dar seguimiento técnico y mantener al cliente informado",
      body: "Empujamos tiempos con la aseguradora y mantenemos comunicación ordenada con el asegurado en cada etapa.",
    },
    {
      title: "Acompañar hasta la resolución del caso",
      body: "Cerramos el expediente con la indemnización o resolución correspondiente y te entregamos el caso resuelto.",
    },
  ],
  closing:
    "Total Assist actúa siempre en tu nombre, brindando un seguimiento profesional del reclamo y procurando que tu cliente esté respaldado en todo momento.",
};

export const homeServicios = [
  {
    id: "gestion",
    title: "Gestión de siniestros",
    body: "Acompañamos el proceso de reclamación desde el primer aviso hasta el cierre, integrando expedientes y dando seguimiento profesional con la aseguradora.",
    bullets: [
      "Operación técnica detrás del agente",
      "Comunicación estructurada con el asegurado",
      "Reducción de errores administrativos",
    ],
  },
  {
    id: "consultoria",
    title: "Consultoría en seguros",
    body: "Asesoría especializada para agentes que enfrentan casos complejos, condiciones de póliza atípicas o situaciones que requieren una segunda opinión técnica.",
    bullets: [
      "Análisis de coberturas",
      "Segunda opinión técnica",
      "Apoyo en decisiones estratégicas",
    ],
  },
  {
    id: "conferencias",
    title: "Conferencias y capacitaciones",
    body: "Llevamos conferencias especializadas a empresas y grupos de trabajo: innovación, tendencias del sector y mejores prácticas profesionales.",
    bullets: [
      "Programas a medida",
      "Innovación y tendencias del sector",
      "Mejores prácticas para equipos",
    ],
  },
  {
    id: "defensa-legal",
    title: "Defensa legal del agente de seguros",
    body: "Respaldo legal especializado para que ejerzas tu actividad como agente de seguros con mayor seguridad y confianza, protegiendo tu labor profesional ante riesgos legales, administrativos y regulatorios.",
    bullets: [
      "Responsabilidad civil frente al asegurado",
      "Responsabilidad por faltas administrativas ante la CNSF",
      "Consultoría jurídica general bajo la figura de coordinador",
    ],
  },
];

export const homeNosotros = {
  eyebrow: "Quiénes somos",
  title: "Un equipo especializado en gestión de siniestros",
  body: "Total Assist nace para fortalecer al agente de seguros, aportando soporte operativo y técnico para que las reclamaciones se gestionen de forma correcta, ordenada y profesional. Nuestro equipo cuenta con más de 27 años de experiencia atendiendo siniestros complejos en todos los ramos.",
  founders: [
    {
      name: "Itzel Paulina Gallardo Cabrera",
      role: "Cofundadora",
    },
    {
      name: "Valeria Lacarra Martínez",
      role: "Cofundadora",
    },
  ],
  mision: {
    title: "Misión",
    body: "Brindar soluciones profesionales de asistencia en la gestión de siniestros que se adapten a las necesidades de agentes de seguros de cualquier tamaño, facilitando sus procesos, optimizando tiempos y mejorando la experiencia del asegurado.",
  },
  vision: {
    title: "Visión",
    body: "Ser la solución de referencia en México para agentes que buscan escalar su operación sin aumentar su carga operativa.",
  },
};

export const homeValores = [
  {
    title: "Profesionalismo",
    body: "Precisión, orden y experiencia en cada caso que tomamos.",
  },
  {
    title: "Transparencia",
    body: "Comunicación clara y seguimiento puntual de cada etapa del expediente.",
  },
  {
    title: "Empatía",
    body: "Entendemos lo que un siniestro significa para el asegurado y para el agente.",
  },
  {
    title: "Confianza",
    body: "Operamos en nombre del agente, respetando siempre su relación con el cliente.",
  },
  {
    title: "Servicio humano",
    body: "Atención cercana, clara y responsable en cada interacción.",
  },
  {
    title: "Excelencia operativa",
    body: "Procesos bien integrados que previenen errores y aceleran resoluciones.",
  },
];

export const homeExperiencia = {
  eyebrow: "Más de 27 años de experiencia",
  title: "Fortalece la confianza de tu cliente en el momento más importante",
  body: "El siniestro es donde realmente se define la percepción del servicio del agente. Cuando tu cliente recibe acompañamiento estructurado durante su reclamación, tu valor como asesor se confirma.",
  bullets: [
    "Tu cliente percibe orden, claridad y respuesta inmediata",
    "Tú entregas un servicio que se siente profesional desde el primer aviso",
    "Reduces tu exposición a errores administrativos y reclamos mal gestionados",
    "Tu reputación como agente se fortalece con cada caso resuelto",
  ],
};

export const homeFaqs = [
  {
    q: "¿Total Assist sustituye al agente de seguros?",
    a: "No. Actuamos en tu nombre y tú sigues siendo el punto de contacto comercial con tu cliente.",
  },
  {
    q: "¿Qué tipos de siniestros atienden?",
    a: "Todos los ramos: auto, hogar, daños, vida, transporte, gastos médicos y más. No nos limitamos a un solo segmento.",
  },
  {
    q: "¿Mi cliente sabrá que no soy yo quien gestiona el reclamo?",
    a: "No. Total Assist opera como una extensión transparente de tu servicio. El asegurado percibe que tú resolviste.",
  },
  {
    q: "¿En qué momento intervienen?",
    a: "Desde el primer aviso del siniestro hasta su resolución final.",
  },
  {
    q: "¿Cómo se integra Total Assist a mi operación?",
    a: "Te damos acceso a una plataforma donde registras al asegurado y al siniestro; a partir de ahí nuestro equipo toma el caso y te mantiene informado en cada etapa.",
  },
];

export const homeTagline =
  "Un respaldo que trabaja contigo, no en tu lugar.";

// ─────────────────────────────────────────────────────────────────────────────
//  Imágenes (placeholders Unsplash; reemplazar por assets propios cuando llegue
//  el material definitivo). Los srcs siguen el patrón Unsplash CDN, así pueden
//  ajustarse el tamaño/quality desde el querystring sin cambiar el ID.
// ─────────────────────────────────────────────────────────────────────────────
export const homeImages = {
  hero: {
    src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1100&h=1300&q=80&auto=format&fit=crop",
    alt: "Equipo profesional colaborando en una sesión de trabajo",
  },
  momento: {
    src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1100&h=1300&q=80&auto=format&fit=crop",
    alt: "Profesional revisando documentación de una reclamación",
  },
  nosotros: {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&h=900&q=80&auto=format&fit=crop",
    alt: "Espacio de trabajo de Total Assist",
  },
};

export const landingImages = {
  hero: {
    src: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1100&h=1300&q=80&auto=format&fit=crop",
    alt: "Apretón de manos profesional entre dos agentes de seguros",
  },
  extension: {
    src: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1100&h=1300&q=80&auto=format&fit=crop",
    alt: "Equipo profesional analizando un expediente",
  },
  problema: {
    src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1100&h=900&q=80&auto=format&fit=crop",
    alt: "Escritorio con documentos y reloj — la presión del tiempo en cada reclamación",
  },
};
