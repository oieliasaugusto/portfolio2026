import "./global.scss";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Kensei from "./pages/projects/Kensei";
import Vnw from "./pages/projects/Vnw";
import Wiligent from "./pages/projects/Wiligent";
import KodieAcademy from "./pages/projects/KodieAcademy";
import FalaComAChris from "./pages/projects/FalaComAChris";
import Toca from "./pages/projects/Toca";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Mobiplus from "./pages/projects/Mobiplus";
import { Layout } from "@/components/Layout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/projetos/kodie-academy" element={<KodieAcademy />} />
            <Route path="/projetos/fala-com-a-chris" element={<FalaComAChris />} />
            <Route path="/projetos/wiligent" element={<Wiligent />} />
            <Route path="/projetos/toca" element={<Toca />} />
            <Route path="/projetos/kensei" element={<Kensei />} />
            <Route path="/projetos/vnw" element={<Vnw />} />
            <Route path="/projetos/mobiplus" element={<Mobiplus />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/sobre" element={<About />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
