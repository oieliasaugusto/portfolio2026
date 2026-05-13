import React, { useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Link } from "react-router-dom";
import { Project } from "@/lib/projects";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback } from "react";

interface HeroSliderProps {
  projects: Project[];
  className?: string;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({ projects, className }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: true,
    watchDrag: true,
    dragFree: true,
  });

  const isHovered = useRef(false);

  useEffect(() => {
    if (!emblaApi) return;

    // Auto-scroll removed as requested
    // Slider now only moves when dragged manually

    return () => {
      // Clean up logic if needed
    };
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const handleMouseEnter = () => {
    isHovered.current = true;
  };

  const handleMouseLeave = () => {
    isHovered.current = false;
  };

  return (
    <div className={cn("relative group/slider w-[100vw] left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mt-1 md:mt-2", className)}>
      {/* Edge Fades */}
      <div className="absolute left-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-r  md:from-black via-black/40 to-transparent z-30 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-l md:from-black via-black/40 to-transparent z-30 pointer-events-none" />

      {/* Navigation Arrows (Desktop Only) */}
      <button
        onClick={scrollPrev}
        className="hidden md:flex absolute left-8 lg:left-12 top-1/2 -translate-y-1/2 w-16 h-16 items-center justify-center 
        rounded-full bg-black/20 hover:bg-black/50 border border-white/10 text-white z-40 transition-all hover:scale-1 backdrop-blur-sm"
        aria-label="Projeto anterior"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>
      <button
        onClick={scrollNext}
        className="hidden md:flex absolute right-8 lg:right-12 top-1/2 -translate-y-1/2 w-16 h-16 items-center justify-center 
        rounded-full bg-black/20 hover:bg-black/50 border border-white/10 text-white z-40 transition-all hover:scale-1 backdrop-blur-sm"
        aria-label="Próximo projeto"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      <div
        className="overflow-visible cursor-grab active:cursor-grabbing"
        ref={emblaRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex py-12 md:py-16">
          {projects.map((project) => (
            <div key={project.id} className="flex-[0_0_85%] md:flex-[0_0_50%] lg:flex-[0_0_40%] xl:flex-[0_0_35%] min-w-0 pr-4 md:pr-12">
              <Link
                to={project.path}
                className="group/card relative block glass-card rounded-[2.5rem] overflow-hidden transition-all duration-700 
                ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-8 hover:shadow-[0_45px_90px_-20px_rgba(65,53,222,0.35)] 
                h-[400px] md:h-[400px] border border-white/5 select-none"
              >
                {/* Image */}
                <img
                  src={project.banner}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover/card:scale-1"
                />

                {/* Darker Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80 group-hover/card:opacity-100 transition-opacity duration-700" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 p-4 md:p-8 w-full z-10">
                  <h3 className="text-2xl md:text-4xl font-regular text-white mb-2 md:mb-0 tracking-tight transform transition-all duration-700 md:group-hover/card:-translate-y-3">
                    {project.title}
                  </h3>
                  <div className="overflow-hidden">
                    <p className="h-24 text-white/80 text-sm md:text-base font-light w-full leading-relaxed transition-all duration-700
                    opacity-100 translate-y-0 md:opacity-0 md:group-hover/card:opacity-100 md:translate-y-6 md:group-hover/card:translate-y-0">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Subtle Glow effects */}
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[2.5rem] pointer-events-none z-20" />
                <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-1000 pointer-events-none z-0">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(65,53,222,0.25),transparent_70%)]" />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
