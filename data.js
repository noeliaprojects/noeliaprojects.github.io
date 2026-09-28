window.PORTFOLIO = {
  person: {
    name: "Noelia",

    email: ["noelia.projects", "gmail.com"],
    github: "https://github.com/noeliaprojects",
    linkedin: "",
    amazon: "https://www.amazon.es/stores/Noelia-D%C3%ADaz-Cabello/author/B0GC24WSTF",
    googlePlay: "https://play.google.com/store/apps/developer?id=noelia.projects",
    photo: "",
    cv: ""
  },

  sections: [
    { id: "web",     title: { ca: "En línia", es: "En línea", en: "Online" }, count: false },
    { id: "fun",     title: { ca: "Descarregables", es: "Descargables", en: "Downloadable" }, count: false },
    { id: "private", title: { ca: "Apps privades",              es: "Apps privadas",              en: "Private apps" }, count: false,
      note:  { ca: "Per a ús intern: no són públiques.",
               es: "Para uso interno: no son públicas.",
               en: "For internal use: not public." } },
    { id: "uni",     title: { ca: "Treballs de la universitat", es: "Trabajos de la universidad", en: "University work" }, count: false },
    { id: "books",   title: { ca: "Els meus llibres",           es: "Mis libros",                 en: "My books" }, count: false }
  ],

  items: [

    {
      section: "web",
      title: "FCE Speaking Practice",
      subtitle: { ca: "Pràctica de l'speaking del FCE", es: "Práctica del speaking del FCE", en: "FCE speaking practice" },
      glyph: "B2",
      image: "assets/icons/fce.png",
      fit: "logo",
      open: "https://noeliaprojects.github.io/fce-speaking-practice/"
    },
    {
      section: "web",
      title: "Nihongo Hajimeru",
      subtitle: { ca: "Japonès per a principiants", es: "Japonés para principiantes", en: "Japanese for beginners" },
      glyph: "あ",
      image: "assets/icons/nihongo.svg",
      open: "https://noeliaprojects.github.io/nihongo-hajimeru/"
    },
    {
      section: "web",
      title: "Diccionari d'insults catalans",
      subtitle: { ca: "Versió web", es: "Versión web", en: "Web version" },
      glyph: "Ç",
      image: "assets/icons/diccionari.svg",
      open: "https://noeliaprojects.github.io/diccionari-insults/"
    },
    {
      section: "web",
      title: { ca: "Muntador d'horaris", es: "Montador de horarios", en: "Timetable builder" },
      subtitle: { ca: "Horaris del professorat", es: "Horarios del profesorado", en: "Teacher timetables" },
      glyph: "H",
      image: "assets/icons/horaris.svg",
      open: "https://noeliaprojects.github.io/montador-horarios/"
    },
    {
      section: "web",
      title: { ca: "El meu GitHub", es: "Mi GitHub", en: "My GitHub" },
      subtitle: { ca: "Tots els repositoris", es: "Todos los repositorios", en: "All repositories" },
      image: "assets/icons/github-avatar.svg",
      glyph: "</>",
      open: "https://github.com/noeliaprojects?tab=repositories"
    },

    {
      section: "uni",
      title: "Reconocimiento facial en una plataforma portable",
      backTitle: { ca: "TFG d'Enginyeria Electrònica Industrial i Automàtica", es: "TFG de Ingeniería Electrónica Industrial y Automática", en: "Industrial Electronics & Automation Engineering thesis" },
      subtitle: { ca: "TFG d'Enginyeria Electrònica Industrial i Automàtica", es: "TFG de Ingeniería Electrónica Industrial y Automática", en: "Industrial Electronics & Automation Engineering thesis" },
      glyph: "R",
      year: "2020",
      image: "assets/covers/tfg-enginyeria.png",
      summary: {
        ca: "El meu primer treball publicat.",
        es: "Mi primer trabajo publicado.",
        en: "My first published work."
      },
      links: [{ type: "read", url: "https://upcommons.upc.edu/entities/publication/31d3b6cc-d77b-4b31-ae5d-c2a00403a840" }]
    },
    {
      section: "uni",
      title: "Practice Pals",
      badge: { ca: "En desenvolupament", es: "En desarrollo", en: "In development" },
      subtitle: { ca: "TFG d'Educació Primària", es: "TFG de Educación Primaria", en: "Primary Education thesis" },
      year: "2026",
      image: "https://noeliaprojects.github.io/practice-pals/icon-512.png",
      icon: true,
      summary: {
        ca: "TFG d'Educació Primària",
        es: "TFG de Educación Primaria",
        en: "Primary Education thesis"
      },
      links: []
    },

    {
      section: "private",
      title: { ca: "Eines per a l'escola", es: "Herramientas para la escuela", en: "School tools" },
      subtitle: { ca: "AppSheet · Apps Script", es: "AppSheet · Apps Script", en: "AppSheet · Apps Script" },
      year: "",
      image: "",
      summary: {
        ca: "Gestió d'assistència, emails en bloc, gestió del dia a dia, aniversaris, etc.",
        es: "Gestión de asistencia, emails en bloque, gestión del día a día, cumpleaños, etc.",
        en: "Attendance, bulk emails, day-to-day management, birthdays and more."
      },
      links: []
    },
    {
      section: "private",
      title: { ca: "Gestió de cites", es: "Gestión de citas", en: "Appointment manager" },
      subtitle: { ca: "Eina per a empreses", es: "Herramienta para empresas", en: "Business tool" },
      year: "",
      image: "",
      summary: {
        ca: "Agenda i gestió de cites per a professionals i els seus clients.",
        es: "Agenda y gestión de citas para profesionales y sus clientes.",
        en: "Scheduling and appointment management for professionals and their clients."
      },
      links: []
    },
    {
      section: "private",
      title: { ca: "I més…", es: "Y más…", en: "And more…" },
      subtitle: { ca: "Per millorar l'eficiència de les empreses", es: "Para mejorar la eficiencia de las empresas", en: "To make businesses more efficient" },
      glyph: "+",
      year: "",
      image: "",
      summary: {
        ca: "I més eines per millorar l'eficiència de les empreses.",
        es: "Y más herramientas para mejorar la eficiencia de las empresas.",
        en: "And more tools to make businesses more efficient."
      },
      links: []
    },

    {
      section: "fun",
      title: "Diccionari d'insults catalans",
      subtitle: { ca: "Android · Google Play", es: "Android · Google Play", en: "Android · Google Play" },
      year: "",
      image: "https://play-lh.googleusercontent.com/ZYn5Gnez4UHs6OcN_rlZTIQHKCaJ2iNmKpst-H9ws4yeE5i26vW0V5ptDnp8iWbxpyQsGWs_b1OSrKPN552QyY0=w240-h480",
      summary: {
        ca: "Els insults catalans de sempre, amb la definició, paraules semblants i com es pronuncien. Per riure una estona.",
        es: "Los insultos catalanes de toda la vida, con su definición, palabras parecidas y cómo se pronuncian. Para reírse un rato.",
        en: "Classic Catalan insults with their meaning, similar words and how to pronounce them. Just for a laugh."
      },
      links: [
        { type: "download", url: "https://play.google.com/store/apps/details?id=io.kodular.noelia_projects.DiccionariInsults" },
        { type: "webversion", url: "https://noeliaprojects.github.io/diccionari-insults/" }
      ]
    },
    {
      section: "fun",
      title: "Contes en català",
      subtitle: { ca: "Android · Google Play", es: "Android · Google Play", en: "Android · Google Play" },
      year: "",
      image: "https://play-lh.googleusercontent.com/2wHb-ZbPi2vWHrbkTh1Pn3RXl54-IJxBgOloUvmAz-yRrmSb51z8IWBwRyZ7vLa8Ki22azx7OchncG7_gtufhC0=w240-h480",
      glyph: "C",
      summary: {
        ca: "Contes tradicionals catalans narrats i il·lustrats, per als més petits i les seves famílies.",
        es: "Cuentos tradicionales catalanes narrados e ilustrados, para los más pequeños y sus familias.",
        en: "Traditional Catalan tales, narrated and illustrated, for young children and their families."
      },
      links: [
        { type: "download", url: "https://play.google.com/store/apps/details?id=io.kodular.noelia_projects.contacontes" }
      ]
    },
    {
      section: "fun",
      title: { ca: "Minijocs", es: "Minijuegos", en: "Mini-games" },
      badge: { ca: "En desenvolupament", es: "En desarrollo", en: "In development" },
      subtitle: { ca: "App de minijocs", es: "App de minijuegos", en: "Mini-games app" },
      glyph: "★",
      year: "",
      image: "",
      summary: {
        ca: "Una app de minijocs.",
        es: "Una app de minijuegos.",
        en: "A mini-games app."
      },
      links: []
    },

    {
      section: "books",
      title: "Mar the Mandrill",
      badge: { ca: "Aviat", es: "Próximamente", en: "Coming soon" },
      subtitle: "Dica Fables",
      year: "",
      image: "assets/covers/mar-mandrill.jpg",
      summary: {
        ca: "Aviat a Amazon.",
        es: "Próximamente en Amazon.",
        en: "Coming soon to Amazon."
      },
      links: []
    },
    {
      section: "books",
      title: "Laia the Owl",
      badge: { ca: "Aviat", es: "Próximamente", en: "Coming soon" },
      subtitle: "Dica Fables",
      year: "",
      image: "assets/covers/laia-owl.jpg",
      summary: {
        ca: "Aviat a Amazon.",
        es: "Próximamente en Amazon.",
        en: "Coming soon to Amazon."
      },
      links: []
    },
    {
      section: "books",
      title: "Pol the Pig",
      subtitle: "Dica Fables",
      year: "",
      image: ["assets/covers/pol-pig.jpg", "https://images.amazon.com/images/P/B0GGB1TQDJ.01.LZZZZZZZ.jpg"],
      summary: {
        ca: "Una història sobre l'amistat.",
        es: "Una historia sobre la amistad.",
        en: "A story about friendship."
      },
      links: [{ type: "buy", url: "https://www.amazon.es/dp/B0GGB1TQDJ" }]
    },
    {
      section: "books",
      title: "Nara the Narwhal",
      subtitle: "Dica Fables",
      year: "",
      image: ["assets/covers/nara-narwhal.jpg", "https://images.amazon.com/images/P/B0GFXPXYWQ.01.LZZZZZZZ.jpg"],
      summary: {
        ca: "Una història sobre el treball en equip.",
        es: "Una historia sobre el trabajo en equipo.",
        en: "A story about teamwork."
      },
      links: [{ type: "buy", url: "https://www.amazon.es/dp/B0GFXPXYWQ" }]
    },
    {
      section: "books",
      title: "Irina the Iguana",
      subtitle: "Dica Fables",
      year: "",
      image: ["assets/covers/irina-iguana.jpg", "https://images.amazon.com/images/P/B0G5M4FG6J.01.LZZZZZZZ.jpg"],
      summary: {
        ca: "Una història sobre compartir.",
        es: "Una historia sobre compartir.",
        en: "A story about sharing."
      },
      links: [{ type: "buy", url: "https://www.amazon.es/dp/B0G5M4FG6J" }]
    },
    {
      section: "books",
      title: "Miquel the Hare",
      subtitle: "Dica Fables",
      year: "",
      image: ["assets/covers/miquel-hare.jpg", "https://images.amazon.com/images/P/B0G5LXD6NB.01.LZZZZZZZ.jpg"],
      summary: {
        ca: "Una història sobre la humilitat.",
        es: "Una historia sobre la humildad.",
        en: "A story about humility."
      },
      links: [{ type: "buy", url: "https://www.amazon.es/dp/B0G5LXD6NB" }]
    },
    {
      section: "books",
      title: "Alex the Duck",
      subtitle: "Dica Fables",
      year: "",
      image: ["assets/covers/alex-duck.jpg", "https://images.amazon.com/images/P/B0G3Y6757B.01.LZZZZZZZ.jpg"],
      summary: {
        ca: "Una història sobre cuidar el medi ambient.",
        es: "Una historia sobre cuidar el medio ambiente.",
        en: "A story about caring for the environment."
      },
      links: [{ type: "buy", url: "https://www.amazon.es/dp/B0G3Y6757B" }]
    }
  ],

  personal: {
    instagram: "",

    favorite: {
      name: "Paca",
      photo: "assets/personal/paca-1.jpg",
      more: ["assets/personal/paca-2.jpg", "assets/personal/paca-3.jpg", "assets/personal/paca-4.jpg", "assets/personal/paca-5.jpg"],
      text: {
        ca: "",
        es: "",
        en: ""
      }
    },

    now: [
      { label: { ca: "Llegint",   es: "Leyendo",     en: "Reading" },   value: { ca: "", es: "", en: "" } },
      { label: { ca: "Escoltant", es: "Escuchando",  en: "Listening to" }, value: { ca: "", es: "", en: "" } },
      { label: { ca: "Aprenent",  es: "Aprendiendo", en: "Learning" },  value: { ca: "", es: "", en: "" } }
    ],

    hobbies: [

    ],

    showTravels: false,

    places: [
      { place: { ca: "Venècia", es: "Venecia", en: "Venice" }, photo: "assets/personal/viatge-venecia.jpg" },
      { place: "Roma", photo: "assets/personal/viatge-roma.jpg" },
      { place: { ca: "Londres", es: "Londres", en: "London" }, photo: "assets/personal/viatge-londres.jpg" },
      { place: { ca: "Dublín", es: "Dublín", en: "Dublin" }, photo: "assets/personal/viatge-dublin.jpg",
        more: ["assets/personal/viatge-dublin-2.jpg"] },
      { place: { ca: "Galícia", es: "Galicia", en: "Galicia" }, photo: "assets/personal/viatge-galicia.jpg" },
      { place: { ca: "Val d'Aran", es: "Valle de Arán", en: "Val d'Aran" }, photo: "assets/personal/viatge-aran.jpg",
        more: ["assets/personal/viatge-aran-2.jpg", "assets/personal/viatge-aran-3.jpg"] },
      { place: "Lisboa", photo: "assets/personal/viatge-lisboa.jpg",
        more: ["assets/personal/viatge-lisboa-2.jpg"] },
      { place: "Fuerteventura", photo: "assets/personal/viatge-1.jpg" }

    ],

    garden: [
      { photo: "assets/personal/flor-1.jpg", caption: { ca: "", es: "", en: "" } },
      { photo: "assets/personal/flor-2.jpg", caption: { ca: "", es: "", en: "" } },
      { photo: "assets/personal/flor-3.jpg", caption: { ca: "", es: "", en: "" } },
      { photo: "assets/personal/flor-4.jpg", caption: { ca: "", es: "", en: "" } },
      { photo: "assets/personal/flor-5.jpg", caption: { ca: "", es: "", en: "" } },
      { photo: "assets/personal/flor-6.jpg", caption: { ca: "", es: "", en: "" } },
      { photo: "assets/personal/flor-7.jpg", caption: { ca: "", es: "", en: "" } },
      { photo: "assets/personal/flor-8.jpg", caption: { ca: "", es: "", en: "" } }
    ]
  },

/*
  journey: {

    now: [
      { title: { ca: "Professora d'anglès", es: "Profesora de inglés", en: "English teacher" },
        text:  { ca: "Classes a totes les edats.", es: "Clases a todas las edades.", en: "Classes for all ages." } },
      { title: { ca: "Grau d'Educació Primària", es: "Grado en Educación Primaria", en: "Primary Education degree" },
        text:  { ca: "Estic convertint el meu hobby en la meva professió.", es: "Estoy convirtiendo mi hobby en mi profesión.", en: "I'm turning my hobby into my profession." } },
      { title: { ca: "Contes", es: "Cuentos", en: "Stories" },
        text:  { ca: "Escric les Dica Fables.", es: "Escribo las Dica Fables.", en: "I write the Dica Fables." },
        link:  "https://www.amazon.es/stores/Noelia-D%C3%ADaz-Cabello/author/B0GC24WSTF" },
      { title: { ca: "Apps i webs", es: "Apps y webs", en: "Apps & websites" },
        text:  { ca: "Per a l'aula, per a empreses i per diversió.", es: "Para el aula, para empresas y por diversión.", en: "For the classroom, for businesses and for fun." },
        link:  "index.html#projects" }
    ],

    education: [
      { when: "",
        title: { ca: "Grau en Educació Primària", es: "Grado en Educación Primaria", en: "BEd in Primary Education" },
        badge: { ca: "en curs", es: "en curso", en: "in progress" } },
      { when: "",
        title: { ca: "Màster en Enginyeria Informàtica", es: "Máster en Ingeniería Informática", en: "MSc in Computer Engineering" },
        badge: { ca: "en pausa", es: "en pausa", en: "on hold" },
        text:  { ca: "L'àmbit de l'educació es va creuar pel camí.", es: "El ámbito de la educación se cruzó en el camino.", en: "The world of education crossed my path." } },
      { when: "",
        title: { ca: "Grau en Enginyeria Electrònica Industrial i Automàtica", es: "Grado en Ingeniería Electrónica Industrial y Automática", en: "BEng in Industrial Electronics and Automation" } }
    ],

    work: [
      { title: { ca: "Professora d'anglès", es: "Profesora de inglés", en: "English teacher" } },
      { title: { ca: "Preparadora d'exàmens oficials de Cambridge", es: "Preparadora de exámenes oficiales de Cambridge", en: "Cambridge exam trainer" } },
      { title: { ca: "Sales Support Manager", es: "Sales Support Manager", en: "Sales Support Manager" } },
      { title: { ca: "Sales Support Trainee", es: "Sales Support Trainee", en: "Sales Support Trainee" } },
      { title: { ca: "Professora de reforç", es: "Profesora de refuerzo", en: "Tutor" } },
      { title: { ca: "Summer camps", es: "Summer camps", en: "Summer camps" } },
      { title: { ca: "Monitora d'acollida", es: "Monitora de acogida", en: "Before-school care leader" } }
    ],

    languages: [
      { name: { ca: "Català",   es: "Catalán",  en: "Catalan" },  level: { ca: "Nativa", es: "Nativa", en: "Native" } },
      { name: { ca: "Castellà", es: "Castellano", en: "Spanish" }, level: { ca: "Nativa", es: "Nativa", en: "Native" } },
      { name: { ca: "Anglès",   es: "Inglés",   en: "English" },  level: ["C2 Proficiency (CPE)", "C1 Advanced (CAE)", "B2 First (FCE)"] },
      { name: { ca: "Alemany",  es: "Alemán",   en: "German" },   level: "A1" },
      { name: { ca: "Xinès",    es: "Chino",    en: "Chinese" },  level: { ca: "Nivell 1", es: "Nivel 1", en: "Level 1" } },
      { name: { ca: "Japonès",  es: "Japonés",  en: "Japanese" }, level: { ca: "Començant", es: "Empezando", en: "Just starting" } }
    ],

    courses: [
      { ca: "Intel·ligència emocional i direcció d'equips", es: "Inteligencia emocional y dirección de equipos", en: "Emotional intelligence and team leadership" },
      { ca: "ACTIC nivell mitjà", es: "ACTIC nivel medio", en: "ACTIC digital skills certificate (intermediate)" },
      { ca: "Formació de formadors", es: "Formación de formadores", en: "Train the trainer" },
      { ca: "Xarxes socials", es: "Redes sociales", en: "Social media" },
      { ca: "Soldadura per elèctrode revestit (xapes i perfils)", es: "Soldadura por electrodo revestido (chapas y perfiles)", en: "Shielded metal arc welding (plates and sections)" }
    ]
  }
*/
};
