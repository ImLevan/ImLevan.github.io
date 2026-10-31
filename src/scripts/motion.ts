/* ============================================================
   Motion — botones magnéticos
   El contenido se muestra estático: sin reveals ni animaciones
   ligadas al scroll.
   ============================================================ */

import { gsap } from "gsap";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(Flip);

const prefersReducedMotion = window.matchMedia(
	"(prefers-reduced-motion: reduce)",
).matches;
const finePointer = window.matchMedia(
	"(hover: hover) and (pointer: fine)",
).matches;

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

	gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
		initMagnetic();
	});
}

if (document.readyState === "loading") {
	document.addEventListener("DOMContentLoaded", init);
} else {
	init();
}
