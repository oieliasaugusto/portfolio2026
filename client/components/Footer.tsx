import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full py-2
     border-t border-white/5 relative z-10">
      <div className="max-w-full md:max-w-[1200px] mx-auto px-8 flex justify-center text-center pt-4">
        <p className="font-light text-sm text-white/45">
          Desenvolvido com 🤍 & ☕ por Elias Augusto | © 2026 Expresse sua Marca
        </p>
      </div>
    </footer>
  );
};
