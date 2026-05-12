import React from 'react';

const UserFlow: React.FC = () => {
    // Dados baseados na imagem Frame 16.jpg
    const contractorSteps = [
        { id: 1, title: 'Define', desc: 'Tipo de Serviço / Vaga' },
        { id: 2, title: 'Publica', desc: 'Disponibiliza no Marketplace' },
        { id: 3, title: 'Seleciona', desc: 'Avalia Perfis e Propostas' },
        { id: 4, title: 'Contrata', desc: 'Inicia Vínculo Digital' },
    ];

    const professionalSteps = [
        { id: 1, title: 'Filtra', desc: 'Busca por Local / Tipo' },
        { id: 2, title: 'Candidata-se', desc: 'Envia Proposta de Valor' },
        { id: 3, title: 'Executa', desc: 'Atualiza Status em Tempo Real' },
        { id: 4, title: 'Conclui', desc: 'Entrega e Recebe Pagamento' },
    ];

    return (
        <div className="min-h-screen py-12 px-4 font-sans rounded-lg">
            <div className="max-w-6xl mx-auto">
                {/* <header className="text-center mb-12">
                    <h1 className="text-3xl font-bold text-gray-800 uppercase tracking-tight">Fluxo de Conexão</h1>
                    <div className="h-1 w-20 bg-yellow-500 mx-auto mt-2"></div>
                </header> */}

                {/* Layout Container */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4">

                    {/* Lado Esquerdo: Contratante (Acima no Mobile) */}
                    <div className="w-full lg:w-1/3 space-y-4 order-1">
                        <h2 className="text-sm font-light tracking-wider text-gray-400 uppercase text-center lg:text-left mb-6">
                            Contratante (Demanda)
                        </h2>
                        {contractorSteps.map((step) => (
                            <div
                                key={step.id}
                                className="bg-white border border-gray-200 p-5 rounded-lg shadow-sm hover:shadow-md 
                                transition-shadow flex flex-col items-center lg:items-end text-center lg:text-right"
                            >
                                <span className="text-yellow-600 font-bold text-lg">{step.id}. {step.title}</span>
                                <span className="text-gray-600 font-sans text-sm">{step.desc}</span>
                            </div>
                        ))}
                    </div>

                    {/* Centro: Imagem (Meio) */}
                    <div className="w-full lg:w-1/3 flex justify-center order-2 lg:order-2">
                        <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden">
                            <img
                                src="/portfolio/ptchris/GigEconomyApp.png"
                                alt="Conexão entre profissional e contratante"
                                className="max-w-[480px] h-[450px] object-cover object-top !rounded-none sm:max-w-xs"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                    </div>

                    {/* Lado Direito: Profissional (Abaixo no Mobile) */}
                    <div className="w-full lg:w-1/3 space-y-4 order-3">
                        <h2 className="text-sm font-light tracking-wider text-gray-400 uppercase text-center lg:text-right mb-6">
                            Profissional (Oferta)
                        </h2>
                        {professionalSteps.map((step) => (
                            <div
                                key={step.id}
                                className="bg-white border border-gray-200 p-5 rounded-lg shadow-sm hover:shadow-md 
                                transition-shadow flex flex-col items-center lg:items-start text-center lg:text-left"
                            >
                                <span className="text-blue-600 font-bold text-lg">{step.id}. {step.title}</span>
                                <span className="text-gray-600 font-sans text-sm">{step.desc}</span>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default UserFlow;