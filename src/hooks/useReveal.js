import { useEffect } from "react";

/**
 * Marca con `is-revealed` cada elemento `[data-reveal]` cuando entra en pantalla.
 * Si el usuario pidió menos movimiento, revela todo de una y no observa nada.
 *
 * `deps` permite volver a escanear cuando el árbol cambia (por ejemplo al filtrar
 * proyectos): sin eso, los nodos montados después quedarían invisibles para siempre.
 */
export function useReveal(deps = []) {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll("[data-reveal]:not(.is-revealed)"));
    if (!nodes.length) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !("IntersectionObserver" in window)) {
      nodes.forEach((node) => node.classList.add("is-revealed"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
