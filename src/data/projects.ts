import type { Localized } from "../i18n/ui";

/* Iconos semánticos: el componente los mapea a SVG (lucide) */
export type ProjectIcon = "github" | "external-link" | "info" | "book";
export type ProjectCategory = "web-dev" | "app-dev";

export interface ProjectLink {
	href: string;
	title: Localized;
	icon: ProjectIcon;
}

export interface Project {
	category: ProjectCategory;
	image: string;
	title: Localized;
	description: Localized;
	techs: { img: string; title: string }[];
	links: ProjectLink[];
}

export const allProjects: Project[] = [
	{
		category: "web-dev",
		image: "anime-schedule.png",
		title: { es: "Anime Schedule", en: "Anime Schedule" },
		description: {
			es: "App web de seguimiento de tus animes",
			en: "Web app to keep track of your anime",
		},
		techs: [
			{ img: "ts.svg", title: "TypeScript" },
			{ img: "nextjs.svg", title: "Next.js" },
			{ img: "NestJS.svg", title: "Nest.js" },
			{ img: "psql.svg", title: "PostgreSQL" },
			{ img: "tailwind.svg", title: "Tailwind CSS" },
			{ img: "redis.svg", title: "Redis" },
		],
		links: [
			{
				href: "https://docs.google.com/document/d/1LK4fWZXyaAlsikpiK0iPU7LMUQW9cIsT/edit?usp=sharing&ouid=112006024511061175431&rtpof=true&sd=true",
				title: { es: "Presentación de la app", en: "App presentation" },
				icon: "info",
			},
			{
				href: "https://docs.google.com/document/d/1lCT8ogpVL7gCE9TLuw6nGkAz1qyaWy0R/edit?usp=sharing&ouid=112006024511061175431&rtpof=true&sd=true",
				title: { es: "Documentación técnica", en: "Technical documentation" },
				icon: "book",
			},
			{
				href: "https://www.anime-schedule.com.ar/",
				title: { es: "Sitio web", en: "Website" },
				icon: "external-link",
			},
		],
	},
	{
		category: "web-dev",
		image: "bc-sublimaciones.png",
		title: { es: "BC Sublimaciones", en: "BC Sublimaciones" },
		description: {
			es: "Web de un emprendimiento de sublimaciones",
			en: "Website for a sublimation business",
		},
		techs: [
			{ img: "html.svg", title: "HTML" },
			{ img: "css.svg", title: "CSS" },
			{ img: "js.svg", title: "JavaScript" },
			{ img: "nextjs.svg", title: "Next.js" },
			{ img: "psql.svg", title: "PostgreSQL" },
			{ img: "figma.svg", title: "Figma" },
			{ img: "git.svg", title: "GIT" },
		],
		links: [
			{
				href: "https://bc-sublimaciones.vercel.app/",
				title: { es: "Sitio web", en: "Website" },
				icon: "external-link",
			},
		],
	},
	{
		category: "web-dev",
		image: "devtoolskit.png",
		title: { es: "Devtoolskit", en: "Devtoolskit" },
		description: {
			es: "Web Astro hecha para desarrolladores",
			en: "Astro site built for developers",
		},
		techs: [
			{ img: "astro.svg", title: "Astro" },
			{ img: "typescript.svg", title: "TypeScript" },
			{ img: "tailwind.svg", title: "Tailwind CSS" },
			{ img: "figma.svg", title: "Figma" },
			{ img: "git.svg", title: "GIT" },
		],
		links: [
			{
				href: "https://devtoolskit.netlify.app/",
				title: { es: "Sitio web", en: "Website" },
				icon: "external-link",
			},
			{
				href: "https://github.com/ImLevan/devtools-site/",
				title: { es: "Link al repo", en: "Repo link" },
				icon: "github",
			},
		],
	},
	{
		category: "web-dev",
		image: "showflicks.png",
		title: { es: "Show Flicks", en: "Show Flicks" },
		description: {
			es: "Comunicación con API de películas",
			en: "Consuming a movies API",
		},
		techs: [
			{ img: "ts.svg", title: "TypeScript" },
			{ img: "react.svg", title: "React" },
			{ img: "tailwind.svg", title: "Tailwind CSS" },
			{ img: "figma.svg", title: "Figma" },
			{ img: "git.svg", title: "GIT" },
		],
		links: [
			{
				href: "https://github.com/ImLevan/show-flicks",
				title: { es: "Link al repo", en: "Repo link" },
				icon: "github",
			},
			{
				href: "https://show-flicks.netlify.app/",
				title: { es: "Sitio web", en: "Website" },
				icon: "external-link",
			},
		],
	},
	{
		category: "app-dev",
		image: "inventoryManagement.jpg",
		title: { es: "Inventory Management", en: "Inventory Management" },
		description: {
			es: "App Java de gestión de inventario y ventas",
			en: "Java app for inventory and sales management",
		},
		techs: [
			{ img: "java.svg", title: "Java" },
			{ img: "psql.svg", title: "PostgreSQL" },
			{ img: "git.svg", title: "GIT" },
		],
		links: [
			{
				href: "https://github.com/ImLevan/inventory-management",
				title: { es: "Link al repo", en: "Repo link" },
				icon: "github",
			},
			{
				href: "https://github.com/ImLevan/inventory-management/blob/master/README.md",
				title: { es: "Presentación de la app", en: "App presentation" },
				icon: "info",
			},
			{
				href: "https://docs.google.com/document/d/1VV7-y1ycgLpaTwBV3YA210YF9Iwq_C9MfiGH5S7s7c4/edit?usp=sharing",
				title: { es: "Documentación técnica", en: "Technical documentation" },
				icon: "book",
			},
		],
	},
	{
		category: "app-dev",
		image: "FitOps.png",
		title: { es: "Fit Ops - Management System", en: "Fit Ops - Management System" },
		description: {
			es: "App Java de gestión para gimnasios",
			en: "Java management system for gyms",
		},
		techs: [
			{ img: "java.svg", title: "Java" },
			{ img: "psql.svg", title: "PostgreSQL" },
			{ img: "git.svg", title: "GIT" },
		],
		links: [
			{
				href: "https://github.com/ImLevan/Fit-Ops",
				title: { es: "Link al repo", en: "Repo link" },
				icon: "github",
			},
			{
				href: "https://github.com/ImLevan/Fit-Ops/blob/master/README.md",
				title: { es: "Presentación de la app", en: "App presentation" },
				icon: "info",
			},
			{
				href: "https://docs.google.com/document/d/1Ib_MgmMK8CmQHtCWghYcJ8DVYipcR7gc2sPzEKmKQ6I/edit?usp=sharing",
				title: { es: "Documentación técnica", en: "Technical documentation" },
				icon: "book",
			},
		],
	},
	{
		category: "web-dev",
		image: "proyectoKarU.png",
		title: { es: "KarU - Compra y Venta", en: "KarU - Buy & Sell" },
		description: {
			es: "Plataforma web de compra y venta de vehículos",
			en: "Vehicle buy & sell web platform",
		},
		techs: [
			{ img: "html.svg", title: "HTML" },
			{ img: "css.svg", title: "CSS" },
			{ img: "js.svg", title: "JavaScript" },
			{ img: "react.svg", title: "React" },
			{ img: "psql.svg", title: "PostgreSQL" },
			{ img: "java.svg", title: "Java" },
			{ img: "spring.png", title: "Spring Boot" },
		],
		links: [
			{
				href: "https://www.canva.com/design/DAFmYuhsdcc/kwEgxxoLZ7mjLVykYucEaQ/view?utm_content=DAFmYuhsdcc&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink#1",
				title: { es: "Presentación de la app", en: "App presentation" },
				icon: "info",
			},
			{
				href: "https://github.com/martinzav99/KarU-adminBackend",
				title: { es: "Link al repo", en: "Repo link" },
				icon: "github",
			},
			{
				href: "https://karu-web-back.onrender.com/",
				title: { es: "Sitio web", en: "Website" },
				icon: "external-link",
			},
			{
				href: "https://docs.google.com/document/d/1-6BEFcK2kuAZaM2AzUBnTX_jSIp62mKq7ibSZFRlkPs/edit?usp=sharing",
				title: { es: "Documentación", en: "Documentation" },
				icon: "book",
			},
		],
	},
	{
		category: "app-dev",
		image: "JuegoPy.png",
		title: { es: "Adivina la canción", en: "Guess the song" },
		description: { es: "Juego en Python", en: "Game built in Python" },
		techs: [
			{ img: "python.svg", title: "Python" },
			{ img: "git.svg", title: "GIT" },
		],
		links: [
			{
				href: "https://github.com/ImLevan/Juego-PY",
				title: { es: "Link al repo", en: "Repo link" },
				icon: "github",
			},
		],
	},
	{
		category: "app-dev",
		image: "proyectoAhorcado.png",
		title: { es: "Ahorcado", en: "Hangman" },
		description: { es: "Juego en Java", en: "Game built in Java" },
		techs: [
			{ img: "java.svg", title: "Java" },
			{ img: "git.svg", title: "GIT" },
		],
		links: [
			{
				href: "https://github.com/ImLevan/Ahorcado",
				title: { es: "Link al repo", en: "Repo link" },
				icon: "github",
			},
		],
	},
];
