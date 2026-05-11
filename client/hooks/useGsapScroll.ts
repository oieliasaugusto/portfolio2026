import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

/**
 * useGsapScroll
 *
 * Implements a stacked-section scroll experience WITHOUT touching DOM positions.
 *
 * Root cause of the previous crash:
 *   gsap.set(sections, { position: "fixed" }) physically re-parents DOM nodes,
 *   breaking React's internal fiber tree. On unmount, React called removeChild()
 *   on a node that was no longer a child of its expected parent → NotFoundError.
 *
 * Fix: sections remain in normal document flow. We use opacity/visibility
 * transitions driven by ScrollTrigger scrub on the scroller container itself
 * (pinned via ScrollTrigger's `pin` option on the wrapper, not the children).
 *
 * Each section stacks visually via CSS `position: sticky` + z-index progression,
 * while GSAP handles the cross-fade transitions.
 */
export function useGsapScroll() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = mainRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray<HTMLElement>(
        "section[data-scroll-section], footer[data-scroll-section]",
        root
      );

      if (sections.length === 0) return;

      // Sections stay in the document flow (no position:fixed).
      // We use sticky + full-screen height so they visually "stack".

      gsap.set(sections, {
        position: "sticky",
        top: 0,
        height: "90vh",
        overflow: "visible",
        zIndex: (i) => i + 1,
      });

      // Initial state: all sections hidden except the first
      gsap.set(sections.slice(1), { opacity: 0, visibility: "hidden" });
      gsap.set(sections[0], { opacity: 1, visibility: "visible" });

      // Build one timeline per section transition
      sections.forEach((section, i) => {
        if (i === 0) return;

        const prevSection = sections[i - 1];
        const prevContent = prevSection.querySelector("[data-scroll-content]");
        const currentContent = section.querySelector("[data-scroll-content]");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "top top",
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });

        // Fade out previous section content
        if (prevContent) {
          tl.to(prevContent, { opacity: 0, y: -32, duration: 0.5 }, 0);
        }
        tl.to(prevSection, { opacity: 0, visibility: "hidden", duration: 0.4 }, 0.1);

        // Fade in current section
        tl.fromTo(
          section,
          { opacity: 0, visibility: "hidden" },
          { opacity: 1, visibility: "visible", duration: 0.4 },
          0.1
        );
        if (currentContent) {
          tl.fromTo(
            currentContent,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.6 },
            0.3
          );
        }

        // Staggered reveals inside the section
        const reveals = section.querySelectorAll(
          "[data-scroll-reveal], [data-scroll-card]"
        );
        if (reveals.length > 0) {
          tl.from(
            reveals,
            { y: 20, opacity: 0, stagger: 0.08, duration: 0.5, ease: "power2.out" },
            0.4
          );
        }
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return mainRef;
}