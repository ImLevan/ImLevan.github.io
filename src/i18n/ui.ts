/* ============================================================
   i18n — diccionario tipado ES/EN
   Uso en componentes:
     const lang = Astro.currentLocale ?? "es";
     const t = useTranslations(lang);
     <h2>{t("about.title")}</h2>
   ============================================================ */

export const LANGS = ["es", "en"] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = "es";

export type Localized = Record<Lang, string>;

export function getLangFromUrl(url: URL): Lang {
	const [, first] = url.pathname.split("/");
	return (LANGS as readonly string[]).includes(first)
		? (first as Lang)
		: DEFAULT_LANG;
}

export const ui = {
	/* ---------- Nav ---------- */
	"nav.about": { es: "Sobre mí", en: "About" },
	"nav.experience": { es: "Experiencia", en: "Experience" },
	"nav.projects": { es: "Proyectos", en: "Projects" },
	"nav.skills": { es: "Habilidades", en: "Skills" },
	"nav.contact": { es: "Contacto", en: "Contact" },
	"nav.openMenu": { es: "Abrir menú", en: "Open menu" },
	"nav.closeMenu": { es: "Cerrar menú", en: "Close menu" },

	/* ---------- A11y / chrome ---------- */
	"a11y.themeToggle": { es: "Cambiar tema", en: "Toggle theme" },
	"a11y.langSwitch": { es: "Cambiar idioma", en: "Switch language" },
	"a11y.scrollDown": { es: "Desplazate hacia abajo", en: "Scroll down" },
	"social.mail": { es: "Enviar mail", en: "Send email" },
	"social.linkedin": { es: "Ver perfil de LinkedIn", en: "View LinkedIn profile" },
	"social.github": { es: "Ver perfil de GitHub", en: "View GitHub profile" },

	/* ---------- Hero ---------- */
	"hero.greeting": { es: "Soy", en: "I'm" },
	"hero.scrollHint": { es: "Seguí scrolleando", en: "Keep scrolling" },

	/* ---------- About ---------- */
	"about.eyebrow": { es: "Sobre mí", en: "About me" },
	"about.title": { es: "Creativo y autodidacta", en: "Creative and self-taught" },
	"about.role": {
		es: "Técnico Universitario en Informática · Desarrollador de software",
		en: "IT University Technician · Software Developer",
	},
	"about.location": { es: "Buenos Aires, Argentina", en: "Buenos Aires, Argentina" },
	"about.p1": {
		es: "Mi nombre es Valentín Chianese y soy Técnico universitario en informática y desarrollador de software de Buenos Aires, Argentina. Empecé a programar con Python, pero rápidamente me enamoré de la programación orientada a objetos y Java. He desarrollado y ayudado a desarrollar varios proyectos con este paradigma, aplicando conocimientos de algoritmos, estructuras de datos y diseño de software.",
		en: "My name is Valentín Chianese and I'm an IT university technician and software developer from Buenos Aires, Argentina. I started programming with Python, but I quickly fell in love with object-oriented programming and Java. I've developed and helped develop several projects applying algorithms, data structures and software design.",
	},
	"about.p2": {
		es: "En mis estudios pude vivir desde dentro el análisis, el diseño y la gestión de proyectos informáticos. En particular, en el proyecto académico \"KarU\", trabajando sobre SAFe, tuve la oportunidad de participar en uno de los equipos siendo desarrollador frontend.",
		en: "During my studies I experienced analysis, design and IT project management from the inside. Notably, in the academic project \"KarU\", working with SAFe, I had the opportunity to be part of one of the teams as a frontend developer.",
	},
	"about.p3": {
		es: "Creo que los desarrolladores de software tenemos un papel importante que desempeñar en la creación de un futuro mejor para todos.",
		en: "I believe we software developers play an important role in building a better future for everyone.",
	},
	"about.downloadCv": { es: "Descargar CV", en: "Download CV" },
	"about.certificates": { es: "Certificados", en: "Certificates" },

	/* ---------- Services ---------- */
	"services.eyebrow": { es: "Servicios", en: "Services" },
	"services.title": { es: "¿En qué puedo ayudarte?", en: "How can I help?" },
	"services.desktop.title": { es: "Apps de escritorio", en: "Desktop apps" },
	"services.desktop.desc": {
		es: "Herramientas a medida en Java y Python para gestionar tu negocio.",
		en: "Custom tools in Java and Python to run your business.",
	},
	"services.web.title": { es: "Desarrollo web", en: "Web development" },
	"services.web.desc": {
		es: "Autenticación, bases de datos, APIs y todo lo que tu proyecto necesite.",
		en: "Auth, databases, APIs and whatever your project needs.",
	},
	"services.static.title": { es: "Webs estáticas", en: "Static sites" },
	"services.static.desc": {
		es: "Landing pages rápidas con diseño cuidado.",
		en: "Fast landing pages with careful design.",
	},

	/* ---------- Experience ---------- */
	"experience.eyebrow": { es: "Trayectoria", en: "Journey" },
	"experience.title": { es: "Experiencia y estudios", en: "Experience & education" },
	"experience.workLabel": { es: "Experiencia laboral", en: "Work experience" },
	"experience.eduLabel": { es: "Estudios académicos", en: "Education" },
	"experience.now": { es: "Actualidad", en: "Present" },
	"experience.seeMore": { es: "Ver más detalles", en: "See more details" },
	"experience.plan": { es: "Plan de estudios", en: "Syllabus" },

	/* ---------- Projects ---------- */
	"projects.eyebrow": { es: "Proyectos", en: "Projects" },
	"projects.title": { es: "Cosas que construí", en: "Things I've built" },
	"projects.desc": {
		es: "Algunos proyectos en los que estuve trabajando, alguno más ambicioso que otro. Espero que te parezcan interesantes.",
		en: "Some of the projects I've been working on, some more ambitious than others. I hope you find them interesting.",
	},
	"projects.filterAll": { es: "Todos", en: "All" },
	"projects.filterWeb": { es: "Desarrollo web", en: "Web" },
	"projects.filterApp": { es: "Aplicaciones", en: "Apps" },
	"projects.empty": {
		es: "No hay proyectos en esta categoría.",
		en: "No projects in this category.",
	},
	"projects.viewDemo": { es: "Ver sitio", en: "Live site" },
	"projects.viewRepo": { es: "Repositorio", en: "Repository" },

	/* ---------- Skills ---------- */
	"skills.eyebrow": { es: "Habilidades", en: "Skills" },
	"skills.title": { es: "Tecnologías con las que trabajo", en: "Technologies I work with" },
	"skills.frontend": { es: "Frontend", en: "Frontend" },
	"skills.backend": { es: "Backend", en: "Backend" },
	"skills.other": { es: "Herramientas y datos", en: "Tools & data" },

	/* ---------- Contact ---------- */
	"contact.eyebrow": { es: "Contacto", en: "Contact" },
	"contact.title": { es: "Trabajemos juntos", en: "Let's work together" },
	"contact.desc": {
		es: "Si tenés un proyecto en mente, una idea que te gustaría discutir o simplemente quieres charlar sobre tecnología, no dudes en contactarme. Estoy acá para ayudarte a convertir tus ideas en realidades digitales.",
		en: "If you have a project in mind, an idea you'd like to discuss or simply want to chat about tech, don't hesitate to reach out. I'm here to help you turn your ideas into digital realities.",
	},
	"contact.role": { es: "Desarrollador de Software", en: "Software Developer" },
	"contact.form.name": { es: "Nombre completo", en: "Full name" },
	"contact.form.email": { es: "Dirección de email", en: "Email address" },
	"contact.form.subject": { es: "Asunto", en: "Subject" },
	"contact.form.message": { es: "Mensaje", en: "Message" },
	"contact.form.submit": { es: "Enviar mensaje", en: "Send message" },
	"contact.form.sending": { es: "Enviando…", en: "Sending…" },
	"contact.form.success": {
		es: "¡Mensaje enviado! Te respondo pronto.",
		en: "Message sent! I'll reply soon.",
	},
	"contact.form.error": {
		es: "No se pudo enviar. Probá escribiéndome directo a mi mail.",
		en: "Couldn't send it. Try emailing me directly.",
	},

	/* ---------- Footer ---------- */
	"footer.rights": { es: "Todos los derechos reservados", en: "All rights reserved" },
	"footer.built": { es: "Hecho con Astro", en: "Built with Astro" },
} satisfies Record<string, Localized>;

export type TKey = keyof typeof ui;

export function useTranslations(lang: Lang) {
	return (key: TKey) => ui[key][lang];
}

/* ---------- Contenido que no es una clave simple ---------- */

export const typingWords: Record<Lang, string[]> = {
	es: [
		"Técnico Universitario en Informática",
		"Desarrollador de Software",
		"Desarrollador Backend",
		"Desarrollador Frontend",
	],
	en: [
		"IT University Technician",
		"Software Developer",
		"Backend Developer",
		"Frontend Developer",
	],
};
