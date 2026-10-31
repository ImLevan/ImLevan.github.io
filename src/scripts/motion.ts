/* ============================================================
   Motion — Lenis smooth scroll + GSAP reveals + cursor magnético
   Todo se desactiva con prefers-reduced-motion.
   ============================================================ */

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger, Flip);

const prefersReducedMotion = window.matchMedia(
	"(prefers-reduced-motion: reduce)",
).matches;
const finePointer = window.matchMedia(
	"(hover: hover) and (pointer: fine)",
).matches;

/* ---------- Smooth scroll (Lenis) ---------- */

function initSmoothScroll() {
	const lenis = new Lenis({ lerp: 0.12, smoothWheel: true });

	lenis.on("scroll", ScrollTrigger.update);
	gsap.ticker.add((time) => lenis.raf(time * 1000));
	gsap.ticker.lagSmoothing(0);

	// Anclas: scroll suave vía Lenis respetando el offset del header
	document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((anchor) => {
		anchor.addEventListener("click", (event) => {
			const hash = anchor.getAttribute("href");
			if (!hash || hash === "#") return;
			const target = document.querySelector(hash);
			if (!target) return;
			event.preventDefault();
			lenis.scrollTo(target as HTMLElement, { offset: -72 });
		});
	});
}

/* ---------- Reveals al scrollear ---------- */

function initReveals() {
	// Entrada del hero al cargar
	const heroItems = gsap.utils.toArray<HTMLElement>("#top [data-reveal]");
	if (heroItems.length) {
		gsap.from(heroItems, {
			opacity: 0,
			y: 34,
			duration: 0.9,
			ease: "power3.out",
			stagger: 0.12,
			delay: 0.15,
		});
	}

	// Reveals por sección (fuera del hero)
	const items = gsap
		.utils.toArray<HTMLElement>("[data-reveal]")
		.filter((el) => !el.closest("#top"));

	items.forEach((el) => {
		gsap.from(el, {
			opacity: 0,
			y: 28,
			duration: 0.8,
			ease: "power3.out",
			scrollTrigger: { trigger: el, start: "top 88%", once: true },
		});
	});

	// Línea del timeline que se dibuja con el scroll
	const line = document.querySelector<HTMLElement>("[data-timeline-line]");
	if (line && line.parentElement) {
		gsap.fromTo(
			line,
			{ scaleY: 0, transformOrigin: "top center" },
			{
				scaleY: 1,
				ease: "none",
				scrollTrigger: {
					trigger: line.parentElement,
					start: "top 75%",
					end: "bottom 65%",
					scrub: 0.5,
				},
			},
		);
	}
}

/* ---------- Cursor personalizado ---------- */

function initCursor() {
	if (!finePointer) return;

	const dot = document.createElement("div");
	const ring = document.createElement("div");
	dot.className = "cursor-dot";
	ring.className = "cursor-ring";
	dot.setAttribute("aria-hidden", "true");
	ring.setAttribute("aria-hidden", "true");
	document.body.append(ring, dot);

	const dotX = gsap.quickTo(dot, "x", { duration: 0.12, ease: "power3" });
	const dotY = gsap.quickTo(dot, "y", { duration: 0.12, ease: "power3" });
	const ringX = gsap.quickTo(ring, "x", { duration: 0.35, ease: "power3" });
	const ringY = gsap.quickTo(ring, "y", { duration: 0.35, ease: "power3" });

	window.addEventListener(
		"mousemove",
		(event) => {
			dot.classList.add("is-visible");
			ring.classList.add("is-visible");
			dotX(event.clientX);
			dotY(event.clientY);
			ringX(event.clientX);
			ringY(event.clientY);
		},
		{ passive: true },
	);

	document.querySelectorAll("a, button").forEach((el) => {
		el.addEventListener("mouseenter", () => {
			dot.classList.add("is-active");
			ring.classList.add("is-active");
		});
		el.addEventListener("mouseleave", () => {
			dot.classList.remove("is-active");
			ring.classList.remove("is-active");
		});
	});
}

/* ---------- Botones magnéticos ---------- */

function initMagnetic() {
	if (!finePointer) return;

	document.querySelectorAll<HTMLElement>("[data-magnetic]").forEach((el) => {
		const xTo = gsap.quickTo(el, "x", { duration: 0.35, ease: "power3" });
		const yTo = gsap.quickTo(el, "y", { duration: 0.35, ease: "power3" });

		el.addEventListener("mousemove", (event) => {
			const rect = el.getBoundingClientRect();
			xTo((event.clientX - (rect.left + rect.width / 2)) * 0.25);
			yTo((event.clientY - (rect.top + rect.height / 2)) * 0.3);
		});
		el.addEventListener("mouseleave", () => {
			xTo(0);
			yTo(0);
		});
	});
}

/* ---------- Init ---------- */

function init() {
	if (prefersReducedMotion) return;

	initSmoothScroll();

	gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
		initReveals();
		initCursor();
		initMagnetic();
	});
}

if (document.readyState === "loading") {
	document.addEventListener("DOMContentLoaded", init);
} else {
	init();
}
