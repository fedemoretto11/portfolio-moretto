const projects = [
  {
    id: "corporacion-capital",
    title: "Corporacion Capital",
    type: "sitioWeb",
    featured: true,
    imageUrl: "/Corporacion Capital.webp",
    shortDescriptionSpanish:
      "Sitio corporativo orientado a servicios, vacantes y contacto directo con candidatos y empleadores.",
    shortDescriptionEnglish:
      "Corporate website focused on services, open roles, and direct contact with candidates and employers.",
    descriptionSpanish:
      "Sitio web para una empresa de recursos humanos con foco en postulacion a empleos, presentacion de servicios y contacto directo con potenciales candidatos y empleadores.",
    descriptionEnglish:
      "Website for a human resources company focused on job applications, service presentation, and direct contact with candidates and employers.",
    techs: ["React", "Tailwind CSS", "Firebase"],
    githubLink: "https://github.com/fedemoretto11/corporacion-capital",
    webLink: "https://corporacion-capital.vercel.app/",
    isFinished: false,
  },
  {
    id: "kilometros-app",
    title: "Kilometros App",
    type: "varios",
    featured: true,
    imageUrl: "/Kilometros App.webp",
    shortDescriptionSpanish:
      "Herramienta administrativa para cargar kilometraje y consultar informacion operativa con rapidez.",
    shortDescriptionEnglish:
      "Administrative tool built for fast mileage entry and quick lookup of operational information.",
    descriptionSpanish:
      "Herramienta administrativa para registrar kilometros recorridos y ordenar informacion operativa con una interfaz enfocada en carga y consulta rapida.",
    descriptionEnglish:
      "Administrative tool for tracking traveled kilometers and organizing operational information through a UI focused on fast entry and quick lookup.",
    techs: ["React", "JavaScript", "Firebase"],
  },
  {
    id: "super-music-changuito",
    title: "Super Music Changuito",
    type: "sitioWeb",
    featured: true,
    imageUrl: "/Super Music Changuito.webp",
    shortDescriptionSpanish:
      "E-commerce conceptual con catalogo, categorias y un recorrido de compra simple para explorar productos.",
    shortDescriptionEnglish:
      "Concept e-commerce project with catalog browsing, categories, and a simple purchase exploration flow.",
    descriptionSpanish:
      "E-commerce orientado a instrumentos musicales, con catalogo de productos, navegacion por categorias y una experiencia pensada para explorar articulos de forma rapida.",
    descriptionEnglish:
      "E-commerce focused on musical instruments, featuring a product catalog, category-based browsing, and a shopping flow designed for quick exploration.",
    techs: ["React", "JavaScript", "CSS", "Firebase"],
  },
  {
    id: "moretto-srl",
    title: "Moretto SRL",
    type: "sitioWeb",
    imageUrl: "/Moretto SRL.webp",
    shortDescriptionSpanish: "Sitio corporativo para una distribuidora con foco en productos, servicios y presencia comercial.",
    shortDescriptionEnglish: "Corporate website for a distributor focused on products, services, and commercial presence.",
    descriptionSpanish:
      "Sitio corporativo para una distribuidora, enfocado en mostrar productos, servicios y presencia comercial de manera clara y directa.",
    descriptionEnglish:
      "Corporate website for a distributor focused on showcasing products, services, and commercial presence in a clear and direct way.",
    techs: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: "alexpama",
    title: "Alexpama",
    type: "sitioWeb",
    imageUrl: "/Alexpama.webp",
    shortDescriptionSpanish: "Sitio institucional y promocional orientado a presencia digital y acceso rapido a contacto.",
    shortDescriptionEnglish: "Institutional and promotional website focused on digital presence and quick access to contact channels.",
    descriptionSpanish:
      "Sitio institucional y promocional orientado a presencia digital, presentacion de contenidos y acceso rapido a canales de contacto y redes.",
    descriptionEnglish:
      "Institutional and promotional website focused on digital presence, content presentation, and quick access to contact channels and social profiles.",
    techs: ["React", "JavaScript", "CSS"],
  },
  {
    id: "to-do-list",
    title: "To Do List",
    type: "varios",
    imageUrl: "/To Do List.webp",
    shortDescriptionSpanish: "Proyecto personal para practicar JavaScript, POO y un flujo diario de gestion de tareas.",
    shortDescriptionEnglish: "Personal project to practice JavaScript, OOP, and a clear daily task management flow.",
    descriptionSpanish:
      "Aplicacion de lista de tareas creada como proyecto personal para practicar JavaScript y programacion orientada a objetos, con foco en una interfaz simple y flujo claro de gestion diaria.",
    descriptionEnglish:
      "Task management app built as a personal project to practice JavaScript and object-oriented programming, with a simple interface and a clear day-to-day workflow.",
    techs: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/fedemoretto11/To-Do-List",
    webLink: "https://fedemoretto11.github.io/To-Do-List/",
  },
  {
    id: "drum-kit",
    title: "DrumKit",
    type: "varios",
    imageUrl: "/DrumKit.webp",
    shortDescriptionSpanish: "Proyecto interactivo para explorar eventos, audio y feedback inmediato en interfaz.",
    shortDescriptionEnglish: "Interactive project exploring events, audio, and immediate UI feedback.",
    descriptionSpanish:
      "Proyecto interactivo inspirado en una bateria virtual, donde cada tecla dispara un sonido y permite practicar eventos, audio y feedback inmediato en la interfaz.",
    descriptionEnglish:
      "Interactive project inspired by a virtual drum pad where each key triggers a sound, helping explore events, audio, and immediate UI feedback.",
    techs: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: "calculadora",
    title: "Calculadora",
    type: "varios",
    imageUrl: "/Calculadora.webp",
    shortDescriptionSpanish: "Ejercicio de logica de interfaz y operaciones matematicas con foco en rapidez de uso.",
    shortDescriptionEnglish: "UI logic and math operations exercise focused on fast interaction.",
    descriptionSpanish:
      "Calculadora web como ejercicio de logica de interfaz y operaciones matematicas, con una UI simple orientada a velocidad de uso.",
    descriptionEnglish:
      "Web calculator built as a UI logic and math operations exercise, with a simple interface focused on fast interaction.",
    techs: ["HTML", "CSS", "JavaScript"],
  },
]

export default projects
