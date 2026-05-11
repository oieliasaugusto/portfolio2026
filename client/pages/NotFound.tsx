import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Rocket } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-6">
      <div className="text-center max-w-md w-full">
        <div className="mb-8 relative flex justify-center">
          <div className="animate-bounce">
            <Rocket size={120} className="text-[hsl(var(--primary))] drop-shadow-[0_0_25px_rgba(65,53,222,0.8)]" />
          </div>
          {/* Subtle beam effect */}
          <div className="absolute top-[100px] left-1/2 -translate-x-1/2 w-32 h-64 bg-gradient-to-b from-[hsl(var(--primary)/0.3)] to-transparent blur-xl opacity-50" />
        </div>
        
        <h1 className="text-8xl font-bold mb-4 tracking-tighter opacity-20">404</h1>
        <h2 className="text-3xl font-bold mb-4">Você se perdeu no espaço?</h2>
        <p className="text-white/60 mb-8 leading-relaxed">
          A página que você procura foi abduzida ou nunca existiu neste sistema.
        </p>
        
        <Link 
          to="/" 
          className="inline-block px-10 py-4 bg-[hsl(var(--primary))] text-white rounded-full font-bold tracking-widest uppercase hover:scale-105 transition-all duration-300 shadow-lg shadow-[hsl(var(--primary)/0.3)]"
        >
          Voltar para a Terra
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
