import type { Localized } from "../i18n/ui";

export interface TimelineItem {
	kind: "work" | "education";
	date: Localized;
	title: Localized;
	organization: Localized;
	description: Localized;
	highlights?: Localized[];
	link?: { href: string; label: Localized };
}

export const timeline: TimelineItem[] = [
	{
		kind: "work",
		date: { es: "Mayo 2024 — Actualidad", en: "May 2024 — Present" },
		title: { es: "Desarrollador full stack", en: "Full stack developer" },
		organization: { es: "Boreal Technologies", en: "Boreal Technologies" },
		description: {
			es: "Desarrollo de aplicaciones web con Node.js, Spring Boot, Django, React y Angular. Contribuyo al desarrollo de microservicios, la integración de APIs REST y el despliegue en Azure DevOps, trabajando con JIRA, GIT y GitHub.",
			en: "Web application development with Node.js, Spring Boot, Django, React and Angular. I contribute to microservices development, REST API integration and deployment on Azure DevOps, working with JIRA, GIT and GitHub.",
		},
		link: {
			href: "https://ar.linkedin.com/in/valentin-chianese",
			label: { es: "Ver más detalles", en: "See more details" },
		},
	},
	{
		kind: "work",
		date: { es: "Diciembre 2020 — Mayo 2024", en: "December 2020 — May 2024" },
		title: { es: "Software Developer", en: "Software Developer" },
		organization: { es: "Autónomo", en: "Freelance" },
		description: {
			es: "Desarrollo autónomo de aplicaciones de escritorio y web, ofreciendo soluciones tecnológicas personalizadas: herramientas a medida para gestión de inventarios, control de ventas y administración de recursos.",
			en: "Freelance development of desktop and web applications, delivering custom tech solutions: tailored tools for inventory management, sales control and resource administration.",
		},
		link: {
			href: "https://ar.linkedin.com/in/valentin-chianese",
			label: { es: "Ver más detalles", en: "See more details" },
		},
	},
	{
		kind: "education",
		date: { es: "Marzo 2019 — Diciembre 2023", en: "March 2019 — December 2023" },
		title: {
			es: "Tecnicatura Universitaria en Informática",
			en: "University Technician in Informatics",
		},
		organization: {
			es: "Universidad Nacional de General Sarmiento",
			en: "National University of General Sarmiento",
		},
		description: {
			es: "Formación orientada a la industria IT con énfasis en análisis, diseño y gestión de proyectos informáticos.",
			en: "IT industry-focused training with emphasis on analysis, design and IT project management.",
		},
		highlights: [
			{ es: "Finalizada", en: "Completed" },
			{ es: "21 materias", en: "21 subjects" },
		],
		link: {
			href: "https://www.ungs.edu.ar/carrera/tecnicatura-universitaria-en-informatica",
			label: { es: "Plan de estudios", en: "Syllabus" },
		},
	},
	{
		kind: "education",
		date: { es: "Marzo 2019 — Actualidad", en: "March 2019 — Present" },
		title: { es: "Licenciatura en Sistemas", en: "Bachelor's in Information Systems" },
		organization: {
			es: "Universidad Nacional de General Sarmiento",
			en: "National University of General Sarmiento",
		},
		description: {
			es: "En curso, con foco en fundamentos de sistemas de información y desarrollo de software a escala.",
			en: "In progress, focused on information system fundamentals and large-scale software development.",
		},
		highlights: [
			{ es: "25 materias aprobadas", en: "25 subjects passed" },
			{ es: "37 materias en total", en: "37 subjects in total" },
		],
		link: {
			href: "https://www.ungs.edu.ar/carrera/licenciatura-en-sistemas",
			label: { es: "Plan de estudios", en: "Syllabus" },
		},
	},
];
