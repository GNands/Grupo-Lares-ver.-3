export interface Project {
  id: string;
  title: string;
  client: string;
  clientType: 'institucion' | 'empresa' | 'ong' | 'cultural';
  date: string;
  location: string;
  division: 'Wiñaypaq' | 'Cinema Pro' | 'Integral';
  serviceType: string;
  tagline: string;
  objective: string;
  solution: string;
  laresRole: string;
  capabilities: string[];
  deliverables: string[];
  impact: string;
  metrics: { label: string; value: string }[];
  image: string;
  featuredQuote?: { text: string; author: string; role: string };
  videoDuration?: string;
}

export interface Client {
  id: string;
  name: string;
  category: 'Instituciones Públicas' | 'ONG & Cooperación' | 'Empresas Privadas' | 'Cultura & Espectáculos';
  description: string;
  scope: string;
  relatedProjectId?: string;
}

export const PROJECTS: Project[] = [
  {
    id: 'bodas-de-oro-chimango-lares',
    title: 'Bodas de Oro: Andrés Chimango Lares',
    client: 'Juan Andrés Lares León',
    clientType: 'cultural',
    date: 'Gran Teatro Nacional, Mayo 2025',
    location: 'Gran Teatro Nacional · Lima, Perú',
    division: 'Wiñaypaq',
    serviceType: 'Producción integral del espectáculo',
    tagline: '50 años de virtuosismo andino en el escenario más exigente del país.',
    objective: 'Diseñar y ejecutar un espectáculo de gala conmemorativa de estándar sinfónico para celebrar los 50 años de trayectoria artística del maestro del violín andino, congregando a más de 40 músicos y artistas invitados con una puesta en escena de vanguardia.',
    solution: 'Dirección de arte integral que conjugó iconografía chanka ancestral con iluminación de precisión arquitectónica. Stage management milimétrico con 3 cambios escenográficos sin interrupciones y coordinación de hospitality para delegaciones de 4 regiones.',
    laresRole: 'Liderazgo técnico y artístico general: curaduría escénica, diseño de luces computarizado, coordinación de ensayos generales, acústica y regiduría de escenario.',
    capabilities: ['Dirección de arte', 'Escenografía e iluminación', 'Stage Management', 'Booking & Riders'],
    deliverables: [
      'Espectáculo en vivo de 2h 45m sin demoras',
      'Plano técnico de iluminación y riders de 40 canales acústicos',
      'Master audiovisual 4K multicámara para archivo patrimonial',
      'Libro de regiduría y cronograma técnico general'
    ],
    impact: 'Sold out absoluto en preventa (1,400 localidades). Reconocimiento unánime de la crítica cultural y cobertura en medios nacionales e internacionales.',
    metrics: [
      { label: 'Espectadores', value: '1,400+' },
      { label: 'Músicos en vivo', value: '42' },
      { label: 'Puntualidad en sala', value: '100%' },
      { label: 'Resolución de máster', value: '4K ProRes' }
    ],
    image: '/images/hero_stage_production_1790798317544.jpg',
    featuredQuote: {
      text: 'Grupo Lares demostró una sensibilidad cultural única respaldada por un rigor técnico que pocas productoras logran en teatros de esta envergadura.',
      author: 'Juan Andrés Lares León',
      role: 'Director Artístico'
    },
    videoDuration: '3:45 min resumen'
  },
  {
    id: 'festiafro-nicomedes-santa-cruz',
    title: 'FestiAfro 2025 — Nicomedes Santa Cruz',
    client: 'Dirección de Políticas para la Población Afroperuana – Mincul',
    clientType: 'institucion',
    date: 'Plaza Manco Cápac, Julio 2025',
    location: 'Plaza Manco Cápac, La Victoria · Lima, Perú',
    division: 'Integral',
    serviceType: 'Infraestructuras, logística y cobertura audiovisual',
    tagline: 'Celebración masiva en espacio público con rigor de seguridad y transmisión nacional.',
    objective: 'Implementar el montaje estructural, logístico y audiovisual del festival afroperuano más importante del país en un espacio urbano abierto de alta complejidad y flujo vehicular.',
    solution: 'Montaje de domo escénico de 18 metros con certificación estructural, refuerzo acústico de tiro largo con inteligibilidad en toda la plaza, cerramiento de seguridad perimétrica y unidad móvil de transmisión en vivo.',
    laresRole: 'Gestión integral de permisos, diseño y supervisión estructural, dirección técnica de sonido e iluminación, coordinación de 14 agrupaciones y transmisión multicámara en directo.',
    capabilities: ['Operación de eventos', 'Diseño estructural', 'Streaming multicámara', 'Dirección técnica'],
    deliverables: [
      'Escenario principal techado de 18x12m con pantallas LED de 2.6mm',
      'Transmisión ininterrumpida de 8 horas para señal digital del Ministerio',
      'Aftermovie institucional y 15 microcápsulas para redes sociales',
      'Plan de contingencia y evacuación aprobado por Defensa Civil'
    ],
    impact: 'Más de 12,000 asistentes durante la jornada, saldo cero incidentes y más de 85,000 espectadores conectados en vivo en todo el Perú y el exterior.',
    metrics: [
      { label: 'Asistencia masiva', value: '12,000+' },
      { label: 'Horas de streaming', value: '8.5 hrs' },
      { label: 'Agrupaciones en vivo', value: '14' },
      { label: 'Incidentes', value: '0' }
    ],
    image: '/images/festi_afro_culture_1790798340020.jpg',
    featuredQuote: {
      text: 'El despliegue de Grupo Lares en un espacio tan desafiante como la Plaza Manco Cápac garantizó la dignidad y el brillo que esta conmemoración requería.',
      author: 'Coordinación Ejecutiva',
      role: 'Ministerio de Cultura del Perú'
    },
    videoDuration: '4:20 min resumen'
  },
  {
    id: 'quebrada-huaycoloro-cwe',
    title: 'Un río para el futuro: Solución Huaycoloro',
    client: 'CWE – China International Water & Electric Corp.',
    clientType: 'empresa',
    date: 'Lurigancho-Chosica, Octubre 2024',
    location: 'Lurigancho-Chosica · Lima, Perú',
    division: 'Cinema Pro',
    serviceType: 'Video institucional y documental de entrega de obra',
    tagline: 'Documentación cinematográfica de una de las mayores obras de mitigación hidráulica.',
    objective: 'Crear una pieza audiovisual bilingüe de alto estándar corporativo que documente la ejecución, tecnología ingenieril y beneficios comunitarios de la solución integral contra huaicos e inundaciones en Huaycoloro.',
    solution: 'Guion narrativo enfocado en el impacto en las familias y el desafío de ingeniería. Tomas aéreas con drones certificados en zona de quebrada, animación 3D del flujo hídrico y entrevistas a especialistas en campo.',
    laresRole: 'Producción audiovisual integral: conceptualización, guion técnico-narrativo, rodaje en locaciones agrestes con estándares de seguridad industrial, postproducción y masterización multiformato.',
    capabilities: ['Guion corporativo', 'Cinematografía aérea', 'Animación 3D', 'Color & Sonido'],
    deliverables: [
      'Documental central de 7 minutos bilingüe (Español / Inglés / Mandarín)',
      'Versión ejecutiva de 2 minutos para comités de inversión y banca multilateral',
      'Paquete de 6 clips en formato 9:16 y 1:1 para comunicación de RSE',
      'Banco fotográfico institucional de 120 imágenes en alta resolución'
    ],
    impact: 'Aprobado sin observaciones por la junta directiva internacional; proyectado en eventos diplomáticos de infraestructura y ampliamente difundido por entidades supervisoras.',
    metrics: [
      { label: 'Idiomas de entrega', value: '3 (ES/EN/ZH)' },
      { label: 'Días de rodaje', value: '12 días' },
      { label: 'Tomas aéreas 4K', value: '100% legales' },
      { label: 'Aprobación directiva', value: '100%' }
    ],
    image: '/images/corporate_infrastructure_film_1790798351115.jpg',
    featuredQuote: {
      text: 'Grupo Lares capturó con exactitud la magnitud de la ingeniería y la humanidad de las comunidades protegidas por el proyecto.',
      author: 'Comité de Comunicaciones',
      role: 'CWE Sucursal del Perú'
    },
    videoDuration: '7:15 min documental'
  },
  {
    id: 'voces-del-mantaro-cooperacion',
    title: 'Voces del Mantaro — Protección Territorial',
    client: 'Consorcio Internacional & Red de ONGs Andinas',
    clientType: 'ong',
    date: 'Valle del Mantaro, Junín, Marzo 2025',
    location: 'Valle del Mantaro · Junín, Perú',
    division: 'Integral',
    serviceType: 'Campaña audiovisual y talleres de sensibilización',
    tagline: 'Cine comunitario e investigación territorial para la defensa de cuencas de altura.',
    objective: 'Sensibilizar a comunidades altoandinas y autoridades locales sobre la fragilidad hídrica frente a la deglaciación, produciendo contenidos con pertinencia lingüística en quechua y español.',
    solution: 'Metodología de filmación participativa que involucró a líderes comunales, sabios tradicionales e ingenieros hídricos. Producción de proyecciones al aire libre con cine rodante autónomo impulsado por energía solar.',
    laresRole: 'Investigación de campo, dirección audiovisual intercultural, postproducción bilingüe con subtitulación accesible y despliegue logístico en comunidades por encima de los 3,800 m.s.n.m.',
    capabilities: ['Producción intercultural', 'Narrativa documental', 'Cine comunitario', 'Postproducción'],
    deliverables: [
      'Serie de 4 microdocumentales de 5 minutos en Quechua Central y Castellano',
      'Guía didáctica comunitaria para facilitadores de campo',
      '12 proyecciones itinerantes en plazas rurales con debate abierto',
      'Kit de prensa internacional para mesas de financiamiento climático'
    ],
    impact: '18 comunidades firmaron actas comunales de protección de bofedales y cuencas altas. Seleccionado en muestras de cine ambiental en Colombia y Alemania.',
    metrics: [
      { label: 'Comunidades activas', value: '18' },
      { label: 'Altitud de rodaje', value: '3,800 - 4,400m' },
      { label: 'Versión multilingüe', value: 'Quechua / Español' },
      { label: 'Festivales', value: '3 Selecciones' }
    ],
    image: '/images/audiovisual_cinema_shoot_1790798329579.jpg',
    featuredQuote: {
      text: 'Lograron un nivel de respeto y escucha profunda con las comunidades que se tradujo en una pieza documental conmovedora e influyente.',
      author: 'Dra. Elena Carrión',
      role: 'Directora de Programa de Resiliencia Climática'
    },
    videoDuration: '5:30 min cápsula'
  },
  {
    id: 'gala-sostenibilidad-minero-energetica',
    title: 'Gala de Sostenibilidad Minero-Energética',
    client: 'Cámara Binacional de Comercio & Desarrollo',
    clientType: 'empresa',
    date: 'The Westin Lima Hotel, Noviembre 2024',
    location: 'San Isidro · Lima, Perú',
    division: 'Wiñaypaq',
    serviceType: 'Stage management, iluminación escénica y streaming corporativo',
    tagline: 'Cumbre de alta dirección con transmisión satelital segura a tres continentes.',
    objective: 'Orquestar la ceremonia anual de premiación a las mejores prácticas de sostenibilidad industrial ante 350 directores corporativos, embajadores y ministros de estado.',
    solution: 'Diseño lumínico escultural en tonalidades azul noche y titanio, escenario de sobriedad nórdica con pantallas ultradelgadas integradas, sistema de traducción simultánea en cabinas insonorizadas y enlace de fibra privada.',
    laresRole: 'Dirección general del show (calling show / regiduría de escenario), control de tiempos protocolarios por cronómetro digital en atril, mezcla de audio en vivo y enlace streaming punto a punto.',
    capabilities: ['Regiduría protocolar', 'Iluminación inmersiva', 'Ingeniería acústica', 'Streaming encriptado'],
    deliverables: [
      'Gala protocolar de 3 horas ejecutada con margen de desviación menor a 2 minutos',
      'Señal en vivo punto a punto para sedes corporativas en Toronto, Londres y Lima',
      'Vídeo resumen ejecutivo (aftermovie) entregado a las 8 horas de culminado el evento',
      'Memoria fotográfica digital para directores e invitados VIP'
    ],
    impact: 'Puntuación 9.9/10 en encuesta de evaluación directiva; adjudicación directa y renovación para la edición 2025.',
    metrics: [
      { label: 'Líderes de industria', value: '350+' },
      { label: 'Desviación de tiempo', value: '< 2 min' },
      { label: 'Satisfacción directiva', value: '9.9 / 10' },
      { label: 'Sedes conectadas', value: 'Lima / Toronto / Londres' }
    ],
    image: '/images/hero_stage_production_1790798317544.jpg',
    featuredQuote: {
      text: 'Precisión militar con elegancia impecable. Manejaron el protocolo con diplomáticos y CEO internacionales a la perfección.',
      author: 'Comité Organizador',
      role: 'Cámara Binacional'
    },
    videoDuration: '2:50 min aftermovie'
  }
];

export const CLIENTS: Client[] = [
  {
    id: 'c1',
    name: 'Ministerio de Cultura del Perú',
    category: 'Instituciones Públicas',
    description: 'Dirección de Políticas para la Población Afroperuana y Direcciones Desconcentradas.',
    scope: 'Producción de festivales patrimoniales, infraestructuras y transmisión nacional.',
    relatedProjectId: 'festiafro-nicomedes-santa-cruz'
  },
  {
    id: 'c2',
    name: 'CWE — China Water & Electric Corp',
    category: 'Empresas Privadas',
    description: 'Corporación global líder en ingeniería hidráulica, energía e infraestructura.',
    scope: 'Documentales de ingeniería de alta precisión, videos institucionales bilingües y registro de obras.',
    relatedProjectId: 'quebrada-huaycoloro-cwe'
  },
  {
    id: 'c3',
    name: 'Gran Teatro Nacional del Perú',
    category: 'Cultura & Espectáculos',
    description: 'El mayor complejo escénico y acústico del Perú para las artes vivas.',
    scope: 'Producciones artísticas integrales, diseño lumínico y regiduría de escenario.',
    relatedProjectId: 'bodas-de-oro-chimango-lares'
  },
  {
    id: 'c4',
    name: 'Red Andina de Conservación & ONGs',
    category: 'ONG & Cooperación',
    description: 'Consorcio internacional de organizaciones para el desarrollo sostenible y la resiliencia hídrica.',
    scope: 'Campañas de comunicación comunitaria, documentales interculturales bilingües y activaciones territoriales.',
    relatedProjectId: 'voces-del-mantaro-cooperacion'
  },
  {
    id: 'c5',
    name: 'Cámara Binacional de Comercio & Desarrollo',
    category: 'Empresas Privadas',
    description: 'Asociación gremial de empresas multinacionales de energía, minería y comercio exterior.',
    scope: 'Cumbres corporativas, stage management para directores ejecutivos y streaming privado internacional.',
    relatedProjectId: 'gala-sostenibilidad-minero-energetica'
  },
  {
    id: 'c6',
    name: 'UNESCO Perú (Proyectos Culturales)',
    category: 'ONG & Cooperación',
    description: 'Iniciativas de salvaguardia del patrimonio inmaterial y fomento a la diversidad cultural.',
    scope: 'Registro audiovisual de maestros tradicionales y memorias documentales.'
  },
  {
    id: 'c7',
    name: 'Municipalidad Metropolitana de Lima',
    category: 'Instituciones Públicas',
    description: 'Gerencias de Cultura, Turismo y Gestión de Riesgo de Desastres.',
    scope: 'Eventos cívicos masivos, activaciones culturales urbanas y seguridad en escena.'
  },
  {
    id: 'c8',
    name: 'Productoras y Agencias BTL Aliadas',
    category: 'Cultura & Espectáculos',
    description: 'Agencias creativas que tercerizan su brazo técnico y escénico con Grupo Lares.',
    scope: 'Socio de producción especializado, dotación de equipamiento y dirección de campo.'
  }
];

export const WINAYPAQ_SERVICES = [
  {
    id: 'w1',
    title: 'Dirección de arte y diseño conceptual',
    description: 'Definimos enfoque creativo, paleta, atmósferas y recursos visuales que dan identidad a tu evento.',
    details: 'Traducimos objetivos institucionales o artísticos en un concepto operativo: riders, planos escénicos y moodboards accionables. Coordinamos con proveedores y técnicos para asegurar coherencia estética del ensayo general al telón final.'
  },
  {
    id: 'w2',
    title: 'Escenografía e iluminación de precisión',
    description: 'Diseñamos escenografías funcionales y seguras, optimizadas para montaje, traslado y alto impacto.',
    details: 'La iluminación refuerza narrativa y ritmo escénico: key lights, acentos y colorimetría al servicio de la experiencia. Trabajamos con plots claros en CAD/WYSIWYG, patch detallado y preprogramación para minimizar tiempos en sala y maximizar impacto.'
  },
  {
    id: 'w3',
    title: 'Gestión y operación (Stage Management)',
    description: 'Construimos cronogramas realistas, llamamos tiempos y coordinamos backstage, cambios de escena y contingencias.',
    details: 'Mantenemos comunicación fluida con técnicos de sala, talento y producción general. Nuestra meta: precisión milimétrica en la ejecución y cero sorpresas durante la función o transmisión en vivo.'
  },
  {
    id: 'w4',
    title: 'Booking y coordinación de talento',
    description: 'Curaduría artística, contratación formal, riders técnicos y logística de hospitalidad para artistas y ponentes.',
    details: 'Gestionamos ensayos previos, salas de descanso y flujos de escenario para que el talento se concentre exclusivamente en su performance. Garantizamos entregables y condiciones acordadas con total transparencia.'
  }
];

export const CINEMA_PRO_SERVICES = [
  {
    id: 'c1',
    title: 'Videos corporativos e institucionales',
    description: 'Guionizamos y producimos piezas que explican quién eres y qué haces con claridad narrativa y estética consistente.',
    details: 'Filmación en locaciones remotas o estudio, entrevistas a directivos, B-roll cinematográfico, motion graphics para datos y call-to-action de alto impacto. Entregables adaptados por plataforma (16:9, 1:1, 9:16).'
  },
  {
    id: 'c2',
    title: 'Spots y contenido para redes de alta retención',
    description: 'Creatividades cortas orientadas a performance y conversión: hooks en los primeros segundos y cierre accionable.',
    details: 'Versionamos por duración y canal, optimizamos subtítulos para consumo sin audio y entregamos masters listos para pauta en Meta, TikTok, LinkedIn, YouTube y plataformas programáticas.'
  },
  {
    id: 'c3',
    title: 'Videoclips musicales & piezas autorales',
    description: 'Tratamiento visual, plan de rodaje y dirección de arte para potenciar la propuesta del artista.',
    details: 'Narrativo o performance, con fotografía cuidada y edición rítmica. Coordinamos permisos de locación, drones y logística para que la energía creativa quede intacta frente a la cámara.'
  },
  {
    id: 'c4',
    title: 'Animación & Motion Graphics 2D/Mixtas',
    description: 'Explicativos técnicos, títulos, lower thirds y piezas 2D/3D que sintetizan conceptos complejos con dinamismo.',
    details: 'Diseño de estilo visual, storyboards y animación con timing preciso. Ideal para informes de sostenibilidad, procesos de ingeniería o identidades de marca.'
  },
  {
    id: 'c5',
    title: 'Cobertura de eventos & streaming multicámara',
    description: 'Unidad móvil o set portátil con dirección técnica, mezcla en vivo, grabación multitrack y piezas resumen.',
    details: 'Señal estable con redundancia, audio de estudio calibrado y flujo de clips en tiempo récord para redes durante el mismo evento. Opcional: highlights inmediatos y aftermovie cinematográfico.'
  },
  {
    id: 'c6',
    title: 'Postproducción integral & masterización',
    description: 'Edición fina, corrección y gradación de color (DaVinci Resolve), mezcla y limpieza de audio (estándar EBU R128), música y gráficos.',
    details: 'Entregamos paquetes completos de formatos y versiones para televisión, cine, salas de conferencias o canales digitales.'
  }
];

export const FAQS_WINAYPAQ = [
  {
    q: '¿Trabajan con equipo propio o externo?',
    a: 'Combinamos un núcleo de dirección propio con especialistas externos pre-validados (iluminadores, escenógrafos, riggers). Grupo Lares asume el liderazgo, control de calidad, seguridad y cumplimiento de cronogramas.'
  },
  {
    q: '¿Pueden operar fuera de Lima y a nivel internacional?',
    a: 'Sí. Contamos con experiencia en todas las regiones del Perú (costa, andes y selva) y enlaces técnicos para delegaciones internacionales, con logística integral planificada: transporte, viáticos, seguros y contingencias.'
  },
  {
    q: '¿Qué necesito para cotizar un evento?',
    a: 'Un brief básico con objetivo principal, fecha tentativa, venue o locación estimada, aforo esperado y referencias visuales o técnicas si las tienes.'
  }
];

export const FAQS_CINEMA_PRO = [
  {
    q: '¿Cuánto tarda la producción de un video?',
    a: 'Piezas para redes sociales y clips cortos: 1 a 2 semanas. Videos institucionales, spots o documentales de mayor escala: 3 a 6 semanas según alcance y rondas de aprobación.'
  },
  {
    q: '¿Qué incluye el presupuesto de producción audiovisual?',
    a: 'Incluye fase de preproducción (guion, locaciones, plan de rodaje), días de rodaje (equipo de cámara, luces, sonido, personal técnico) y postproducción con 1 a 2 rondas de cambios formales.'
  },
  {
    q: '¿Entregan archivos editables y másteres?',
    a: 'Entregamos los masters finales en máxima calidad (ProRes, H.264, multiformatos). Los archivos editables y proyectos abiertos se pueden incluir bajo acuerdo previo y costos de preparación/licenciamiento.'
  }
];
