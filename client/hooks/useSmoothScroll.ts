import { useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLocation } from "react-router-dom";

export function useSmoothScroll() {
  const location = useLocation();
  const lenisRef = useRef<Lenis | null>(null);

  // Create Lenis once on mount
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const tickerCallback = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    lenisRef.current = lenis;

    // Intercepta todos os cliques em links de âncora da mesma página
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      
      if (
        anchor && 
        anchor.hash && 
        anchor.origin === window.location.origin && 
        anchor.pathname === window.location.pathname
      ) {
        e.preventDefault();
        if (lenisRef.current) {
          lenisRef.current.scrollTo(anchor.hash, { offset: -80, duration: 1.2 });
          // Atualiza a URL sem causar o salto nativo do navegador
          window.history.pushState(null, "", anchor.hash);
        }
      }
    };
    
    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      lenis.destroy();
      gsap.ticker.remove(tickerCallback);
      lenisRef.current = null;
    };
  }, []);

  // Lida com mudança de rotas (cross-page navigation) e hashes
  useEffect(() => {
    if (lenisRef.current) {
      if (location.hash) {
        // Pequeno delay para garantir que a nova página foi renderizada
        const timer = setTimeout(() => {
          lenisRef.current?.scrollTo(location.hash, { offset: -80, duration: 1.2 });
        }, 150);
        return () => clearTimeout(timer);
      } else {
        // Se não tiver hash, vai para o topo instantaneamente
        lenisRef.current.scrollTo(0, { immediate: true });
      }
    }
  }, [location.pathname, location.hash]);
}
