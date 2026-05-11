'use client';

import React from 'react';

const BadgeCircularAntiHorario: React.FC = () => {
    const texto = "DISPONÍVEL PARA SERVIÇOS • ";
    const letras = texto.split("");
    const raio = 85;

    return (
        <div className="flex items-center justify-center p-12">
            <div className="relative w-64 h-64 flex items-center justify-center">
                <img src="/work.svg" alt="Trabalhe comigo" className='w-[64px] h-[64px] absolute object-contain rounded-full' />

                {/* Container com Animação Anti-Horária */}
                <div
                    className="absolute inset-0 animate-reverse-spin"
                    style={{ animationDuration: '45s' }} // Bem mais lento
                >
                    {letras.map((letra, i) => (
                        <span
                            key={i}
                            className="absolute left-1/2 top-1/2 text-[hsl(var(--tertiary))] font-bold text-xl uppercase"
                            style={{
                                transform: `
                  translate(-50%, -50%) 
                  rotate(${i * (360 / letras.length)}deg) 
                  translateY(-${raio}px)
                `,
                            }}
                        >
                            {letra}
                        </span>
                    ))}
                </div>

                {/* Estilos para a animação reversa (Anti-horária) */}
                <style jsx>{`
          @keyframes reverse-spin {
            from { transform: rotate(360deg); }
            to { transform: rotate(0deg); }
          }
          .animate-reverse-spin {
            animation: reverse-spin linear infinite;
          }
        `}</style>
            </div>
        </div>
    );
};

export default BadgeCircularAntiHorario;