import React, { useState } from "react";

export default function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const formattedMessage = `Olá, sou ${name} (${email}). ${message}`;

    const handleSendWhatsApp = () => {
        if (!name.trim() || !email.trim() || !message.trim()) return;
        const numeroWhatsApp = "5521996364203";
        const textoCodificado = encodeURIComponent(formattedMessage);
        const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${textoCodificado}`;
        window.open(linkWhatsApp, "_blank");
        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <section id="contato" className="py-24 px-6 md:px-10 lg:px-14 xl:px-40 flex items-center justify-center border-t border-white/5 bg-gradient-to-b from-black to-[#5B51D8]/05">
            <div className="relative z-10 w-full md:max-w-2xl">
                <div className="mb-8 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5B51D8]/10 border border-[#5B51D8]/30 text-[#8B83FF] text-xs uppercase tracking-widest mb-6 font-mono">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#5B51D8] animate-pulse"></span>
                        Vamos trabalhar juntos
                    </div>
                    <h1 className="text-4xl md:text-5xl font-semibold text-white">
                        Fale Comigo!
                    </h1>
                </div>

                <div className="relative z-10 bg-white/[0.02] border border-white/10 rounded-2xl flex flex-col w-full backdrop-blur-md">
                    <div className="p-6 md:p-10 flex flex-col flex-grow justify-center gap-4">
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Nome"
                            className="w-full bg-white/5 border border-white/10 text-white placeholder-white/40 px-4 py-3 rounded-xl text-md font-light focus:outline-none focus:border-[#5B51D8] focus:ring-1 focus:ring-[#5B51D8] transition-all"
                        />

                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            className="w-full bg-white/5 border border-white/10 text-white placeholder-white/40 px-4 py-3 rounded-xl text-md font-light focus:outline-none focus:border-[#5B51D8] focus:ring-1 focus:ring-[#5B51D8] transition-all"
                        />

                        <textarea
                            id="mensagem-usuario"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Como posso ajudar você a alcançar os seus objetivos de negócio?"
                            className="w-full bg-white/5 border border-white/10 text-white placeholder-white/40 px-4 py-3 h-[140px] rounded-xl text-md font-light focus:outline-none focus:border-[#5B51D8] focus:ring-1 focus:ring-[#5B51D8] flex-grow resize-none transition-all"
                        />

                        <button
                            onClick={handleSendWhatsApp}
                            disabled={!name.trim() || !email.trim() || !message.trim()}
                            className="bg-[#5B51D8] hover:bg-[#4A40C7] w-full text-white text-md font-semibold py-4 rounded-xl flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-lg shadow-[#5B51D8]/10"
                        >
                            Enviar no WhatsApp
                            <img src="/whatsapp.svg" alt="WhatsApp" className="w-4 h-4" />
                        </button>

                        <p className="text-center text-white/40 text-xs font-light mt-2">
                            Após enviar, você será direcionado para o chat. Seus dados estão protegidos de acordo com a LGPD.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}