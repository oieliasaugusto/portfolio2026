import * as React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { Footer } from "@/components/Footer";
import ScrollToPlugin from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

/**
 * Layout Component
 * Senior Refactor: Manages the global UI shell and provides cross-page navigation utilities.
 */
export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  // Enable global smooth scrolling
  useSmoothScroll();

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === "/") {
      gsap.to(window, { scrollTo: 0, duration: 1, ease: "power2.inOut" });
    } else {
      navigate("/");
    }
  };

  // Route transition lifecycle
  React.useEffect(() => {
    // Scroll to top on project pages
    if (location.pathname.startsWith("/projetos")) {
      window.scrollTo({ top: 0, behavior: "auto" });
    }

    // Refresh ScrollTrigger to account for dynamic height changes
    const timer = setTimeout(() => ScrollTrigger.refresh(), 200);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  // Header Visibility Logic removed as requested
  // Header will now stay permanently visible

  return (
    <div className="min-h-screen text-foreground overflow-hidden selection:bg-[hsl(var(--primary))] selection:text-white">
      {/* Global Header */}
      <header className="w-full flex justify-center items-center mt-1 md:mt-2 relative z-40">
        <div className="max-w-full md:max-w-[1200px] gap-20 md:gap-24 flex justify-center items-center">
          <div className="w-8 w-1/3 flex justify-start">
            <Link
              to="/sobre"
              className="text-[0.6rem] p-4 md:text-md tracking-[0.2em] uppercase hover:text-[hsl(var(--tertiary))] transition-all duration-300 font-light"
            >
              Sobre
            </Link>
          </div>

          <div className="w-1/3 flex justify-center">
            <Link
              to="/"
              onClick={handleLogoClick}
              id="Name"
              className="text-lg flex content-center gap-4 md:text-2xl tracking-tighter whitespace-nowrap hover:scale-105 transition-transform duration-300"
            >
              {/* <img src="ExM_logo.svg" alt="Logo Expresse sua Marca" className="w-8 h-8" /> */}
              Elias Augusto
            </Link>
          </div>

          <div className="w-8 w-1/3 flex justify-end">
            <Link
              to="/contato"
              className="text-[0.6rem] p-4 md:text-md tracking-[0.2em] uppercase hover:text-[hsl(var(--tertiary))] transition-all duration-300 font-light"
            >
              Contato
            </Link>
          </div>
        </div>
      </header>

      {/* Page Content */}
      <div className="relative">{children}</div>

      <Footer />
    </div>
  );
};
