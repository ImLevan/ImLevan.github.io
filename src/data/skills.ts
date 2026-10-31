import type { Localized } from "../i18n/ui";

export interface Skill {
	img: string;
	title: string;
	description: Localized;
}

export const frontendSkills: Skill[] = [
	{ img: "/img/html.svg", title: "HTML", description: { es: "Marcado web", en: "Web markup" } },
	{ img: "/img/css.svg", title: "CSS", description: { es: "Estilos web", en: "Web styling" } },
	{ img: "/img/js.svg", title: "JavaScript", description: { es: "Interactividad web", en: "Web interactivity" } },
	{ img: "/img/react.svg", title: "React", description: { es: "Librería de JS", en: "JS library" } },
	{ img: "/img/nextjs.svg", title: "Next.js", description: { es: "Framework de React", en: "React framework" } },
	{ img: "/img/angular.svg", title: "Angular", description: { es: "Framework de JS", en: "JS framework" } },
	{ img: "/img/astro.svg", title: "Astro", description: { es: "Framework web", en: "Web framework" } },
	{ img: "/img/figma.svg", title: "Figma", description: { es: "Diseño colaborativo", en: "Collaborative design" } },
	{ img: "/img/tailwind.svg", title: "Tailwind", description: { es: "Framework CSS", en: "CSS framework" } },
	{ img: "/img/ts.svg", title: "TypeScript", description: { es: "Superconjunto de JS", en: "JS superset" } },
];

export const backendSkills: Skill[] = [
	{ img: "/img/java.svg", title: "Java", description: { es: "Lenguaje backend", en: "Backend language" } },
	{ img: "/img/spring.png", title: "Spring Boot", description: { es: "Herramienta de Spring", en: "Spring toolkit" } },
	{ img: "/img/nodejs.svg", title: "Node.js", description: { es: "Entorno de JS", en: "JS runtime" } },
	{ img: "/img/NestJS.svg", title: "Nest.js", description: { es: "Framework de Node.js", en: "Node.js framework" } },
	{ img: "/img/python.svg", title: "Python", description: { es: "Programación de alto nivel", en: "High-level programming" } },
	{ img: "/img/django.svg", title: "Django", description: { es: "Framework de Python", en: "Python framework" } },
];

export const otherSkills: Skill[] = [
	{ img: "/img/mongo.svg", title: "MongoDB", description: { es: "Base de datos NoSQL", en: "NoSQL database" } },
	{ img: "/img/redis.svg", title: "Redis", description: { es: "Caché en memoria", en: "In-memory cache" } },
	{ img: "/img/postman.svg", title: "Postman", description: { es: "Herramienta para APIs", en: "API tooling" } },
	{ img: "/img/mysql.svg", title: "MySQL", description: { es: "Base de datos SQL", en: "SQL database" } },
	{ img: "/img/vscode.svg", title: "VS Code", description: { es: "Editor de código", en: "Code editor" } },
	{ img: "/img/psql.svg", title: "PostgreSQL", description: { es: "Base de datos SQL", en: "SQL database" } },
	{ img: "/img/selenium.svg", title: "Selenium", description: { es: "Tests web automatizados", en: "Automated web testing" } },
	{ img: "/img/sqlite.svg", title: "SQLite", description: { es: "Base de datos SQL", en: "SQL database" } },
	{ img: "/img/git.svg", title: "GIT", description: { es: "Control de versiones", en: "Version control" } },
	{ img: "/img/linux.svg", title: "Linux", description: { es: "Sistema operativo", en: "Operating system" } },
	{ img: "/img/docker.svg", title: "Docker", description: { es: "Contenedores", en: "Containers" } },
];
