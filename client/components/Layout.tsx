import * as React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { Footer } from "@/components/Footer";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetClose } from "@/components/ui/sheet";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

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

          {/* Menu de Navegação Desktop: Todo alinhado à Direita */}
          <nav className="hidden md:flex items-center gap-6 md:gap-8">
            <Link
              to="/sobre"
              className={`text-xs tracking-[0.2em] uppercase transition-all duration-300 font-light ${location.pathname === "/sobre" ? "text-[hsl(var(--tertiary))]" : "hover:text-[hsl(var(--tertiary))]"
                }`}
            >
              Sobre
            </Link>

            <Link
              to="/services"
              className={`text-xs tracking-[0.2em] uppercase transition-all duration-300 font-light ${location.pathname === "/services" ? "text-[hsl(var(--tertiary))]" : "hover:text-[hsl(var(--tertiary))]"
                }`}
            >
              Serviços
            </Link>

            <Link
              to="/"
              className={`text-xs tracking-[0.2em] uppercase transition-all duration-300 font-light ${location.pathname === "/" ? "text-[hsl(var(--tertiary))]" : "hover:text-[hsl(var(--tertiary))]"
                }`}
            >
              Portfolio
            </Link>

            {/* <Link
              to="/services#contact"
              className="text-xs tracking-[0.2em] uppercase hover:text-[hsl(var(--tertiary))] transition-all duration-300 font-light"
            >
              Contato
            </Link> */}
          </nav>

          {/* Menu de Navegação Mobile */}
          <div className="md:hidden flex items-center">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <button className="p-2 -mr-2 text-foreground hover:text-[hsl(var(--primary))] transition-colors">
                  <Menu className="w-6 h-6" />
                  <span className="sr-only">Abrir menu</span>
                </button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] sm:w-[400px] flex flex-col gap-8 pt-24 bg-background/10 backdrop-blur-md border-none shadow-2xl [&>button.opacity-70]:hidden"
              >
                <SheetClose asChild>
                  <button className="absolute top-4 right-6 p-2 -mr-2 text-foreground hover:text-[hsl(var(--primary))] transition-colors">
                    <X className="w-6 h-6" />
                    <span className="sr-only">Fechar menu</span>
                  </button>
                </SheetClose>
                <SheetTitle className="sr-only">Menu de Navegação</SheetTitle>
                <nav className="flex flex-col gap-6">
                  <Link
                    to="/sobre"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-lg tracking-[0.2em] uppercase transition-all duration-300 font-light ${location.pathname === "/sobre" ? "text-[hsl(var(--tertiary))]" : "hover:text-[hsl(var(--tertiary))]"
                      }`}
                  >
                    Sobre
                  </Link>
                  <Link
                    to="/services"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-lg tracking-[0.2em] uppercase transition-all duration-300 font-light ${location.pathname === "/services" ? "text-[hsl(var(--tertiary))]" : "hover:text-[hsl(var(--tertiary))]"
                      }`}
                  >
                    Serviços
                  </Link>
                  <Link
                    to="/"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-lg tracking-[0.2em] uppercase transition-all duration-300 font-light ${location.pathname === "/" ? "text-[hsl(var(--tertiary))]" : "hover:text-[hsl(var(--tertiary))]"
                      }`}
                  >
                    Portfolio
                  </Link>
                  <Link
                    to="/services#contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg tracking-[0.2em] uppercase hover:text-[hsl(var(--tertiary))] transition-all duration-300 font-light"
                  >
                    Contato
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>

        </div>
      </header>

      {/* Page Content */}
      <div className="relative">{children}</div>

      <Footer />
    </div>
  );
};