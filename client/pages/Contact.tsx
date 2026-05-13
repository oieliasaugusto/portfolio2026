import React, { useState } from "react";

export default function Contact() {
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
    <div className="min-h-screen text-foreground bg-black pt-21 px-6 md:px-10 lg:px-14 xl:px-40 flex items-center justify-center">
      <div className="relative z-10 w-full max-w-2xl">
        <h1 className="text-3xl md:text-4xl md:leading-[1.3] font-regular tracking-tight mb-4 text-center">
          Tem uma ideia de projeto? Vamos conversar</h1>
        <p className="text-center text-[hsl(var(--muted-foreground))]/60 mb-8">
          Preencha os dados abaixo e conversaremos no WhatsApp
        </p>

        <div className="relative z-10 glass-card rounded-lg flex flex-col transition-shadow w-full">
          <div className="p-4 md:p-8 flex flex-col flex-grow justify-center gap-4">
            {/* <h2 className="text-2xl lg:text-3xl text-[hsl(var(--foreground))] mb-2 leading-tight">Vamos tomar um café e conversar sobre o seu projeto?</h2> */}

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nome"
              className="w-full bg-white/5 border border-white/10 text-[hsl(var(--foreground))] placeholder-[hsl(var(--foreground))]/40 
              px-4 py-2 rounded-md text-md font-light focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] transition-all"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail"
              className="w-full bg-white/5 border border-white/10 text-[hsl(var(--foreground))] placeholder-[hsl(var(--foreground))]/40 
              px-4 py-2 rounded-md text-md font-light focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] transition-all"
            />
            <textarea
              id="mensagem-usuario"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Sua mensagem"
              className="w-full bg-white/5 border border-white/10 text-[hsl(var(--foreground))] placeholder-[hsl(var(--foreground))]/40 
              px-4 py-2 h-[120px] rounded-md text-md font-light focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] flex-grow resize-none transition-all"
            />
            <button
              onClick={handleSendWhatsApp}
              disabled={!name.trim() || !email.trim() || !message.trim()}
              className="bg-[hsl(var(--primary))] w-full text-white text-md font-medium py-2 rounded-md flex items-center justify-center 
              gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Enviar
              <img src="/whatsapp.svg" alt="WhatsApp" className="w-4 h-4" />
            </button>
            <p className="text-center text-[hsl(var(--muted-foreground))]/60 text-sm font-light">
              Após Enviar, você concorda em receber comunicações de acordo com a LGPD.</p>
          </div>
        </div>
      </div>
      <div className="absolute opacity-20 md:opacity-80 left-0 md:left-[80%] md:left-none Coffee w-[600px] flex items-center justify-center">
        <video autoPlay loop muted className="pointer-events-none"><source src="../../Coffee.mp4" type="video/mp4" /></video>
      </div>
    </div>
  );
}
