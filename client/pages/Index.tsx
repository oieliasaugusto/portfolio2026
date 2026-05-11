import { useGsapScroll } from "@/hooks/useGsapScroll";
import { Hero } from "@/components/sections/Hero";
import { projects } from "@/lib/projects";

/**
 * Index Page
 * Senior Refactor: Orchestrates high-level sections and manages the master scroll context.
 * Business logic is delegated to specialized sub-components.
 */
export default function Index() {
  const mainRef = useGsapScroll();

  return (
    <div ref={mainRef} className="min-h-screen text-foreground overflow-hidden">
      <main>
        {/* Cinematic Entrance & Project Showcase */}
        <Hero projects={projects} />
      </main>
    </div>
  );
}
