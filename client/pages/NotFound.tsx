import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);
  const navigate = useNavigate();
  const [counter, setCounter] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate('/');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [navigate]);
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-6">
      <div className="text-center max-w-md w-full">
        <div className="mb-8 relative flex justify-center">

          <div className="NotFound w-80 h-80 mt-[-30%] mb-[-40%] overflow-hidden flex items-center justify-center">
            <video autoPlay loop muted className="blend-screen"><source src="../../404.mp4" type="video/mp4" /></video>
          </div>

          {/* Subtle beam effect */}
          <div className="absolute top-[100px] left-1/2 -translate-x-1/2 w-32 h-64 bg-gradient-to-b from-[hsl(var(--primary)/0.3)] to-transparent blur-xl opacity-50" />
        </div>

        <h1 className="text-[9rem] font-bold mb-4 tracking-tighter h-20 opacity-10">404</h1>
        <h2 className="relative z-1 text-6xl font-bold mb-4">Oops!</h2>
        <p className="text-white/60 my-8 leading-relaxed">
          A página que você procura foi abduzida!
        </p>

        <p className="pt-8 text-lg font-semibold">
          Você será redirecionado em {counter}...
        </p>
      </div>
    </div>
  );
};

export default NotFound;
