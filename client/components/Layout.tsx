import * as React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { Footer } from "@/components/Footer";
import ScrollToPlugin from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

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

  // Refresh ScrollTrigger to account for dynamic height changes
  React.useEffect(() => {
    const timer = setTimeout(() => ScrollTrigger.refresh(), 200);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="min-h-screen text-foreground overflow-hidden selection:bg-[hsl(var(--primary))] selection:text-white">
      {/* Global Header */}
      <header className="w-full flex justify-center items-center mt-4 md:mt-6 relative z-40 px-6 md:px-10 lg:px-14 xl:px-40">
        <div className="w-full max-w-[1200px] flex justify-between items-center">

          {/* Logo / Nome: Fixado na Extrema Esquerda */}
          <div className="flex justify-start">
            <Link
              to="/"
              onClick={handleLogoClick}
              id="Name"
              className="text-lg flex content-center gap-4 md:text-2xl font-semibold tracking-tighter whitespace-nowrap hover:scale-105 transition-transform duration-300"
            >
              Elias Augusto
            </Link>
          </div>

          {/* Menu de Navegação: Todo alinhado à Direita */}
          <nav className="flex items-center gap-6 md:gap-8">
            <Link
              to="/sobre"
              className="!text-[0.7rem] md:text-sm tracking-[0.2em] uppercase hover:text-[hsl(var(--tertiary))] transition-all duration-300 font-light"
            >
              Sobre
            </Link>

            <Link
              to="/services"
              className="!text-[0.7rem] md:text-sm tracking-[0.2em] uppercase hover:text-[hsl(var(--tertiary))] transition-all duration-300 font-light"
            >
              Serviços
            </Link>

            <Link
              to="/contato"
              className="!text-[0.7rem] md:text-sm tracking-[0.2em] uppercase hover:text-[hsl(var(--tertiary))] transition-all duration-300 font-light"
            >
              Contato
            </Link>
          </nav>

        </div>
      </header>

      {/* Page Content */}
      <div className="relative">{children}</div>

      <Footer />
    </div>
  );
};