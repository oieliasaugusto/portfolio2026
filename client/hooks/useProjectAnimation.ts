import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export function useProjectAnimation() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mainRef.current) return;

    // Disable smooth scroll normalization as it breaks native mobile scrolling
    // const scrollTrigger = ScrollTrigger.normalizeScroll(true);

    const ctx = gsap.context(() => {
      // 1. Initial reveal for the header elements
      gsap.from(".project-info-grid > *", {
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 1.2,
        ease: "power4.out",
      });

      // 2. Fade-in reveal for sections and images
      const revealElements = mainRef.current?.querySelectorAll("section > *, .glass-card, img");
      
      revealElements?.forEach((el) => {
        // Skip if it's already animated by the initial reveal
        if (el.closest(".project-info-grid")) return;

        gsap.fromTo(
          el,
          { 
            opacity: 0, 
            y: 50,
            scale: 0.98,
            filter: "blur(8px)"
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 92%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // 3. Subtle parallax/scale effect for large images
      const images = mainRef.current?.querySelectorAll("section img");
      images?.forEach((img) => {
        gsap.to(img, {
          y: -20,
          ease: "none",
          scrollTrigger: {
            trigger: img,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          }
        });
      });

    }, mainRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return mainRef;
}
