import { projects } from "@/lib/projects";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface OtherProjectsProps {
  currentId: string; // Keep this prop in case we need it, but we show all projects now
}

export default function OtherProjects({ currentId }: OtherProjectsProps) {
  return (
    <section id="otherProjects" className="py-4 border-t border-white/10 mt-24">
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Outros Projetos</h2>
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: true,
          dragFree: true,
          breakpoints: {
            '(min-width: 768px)': {
              slidesToScroll: 3,
              dragFree: false
            }
          }
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4 md:-ml-8">
          {projects.filter(p => p.id !== currentId).map((project) => (
            <CarouselItem key={project.id} className="pl-4 md:pl-8 basis-[85%] sm:basis-1/2 md:basis-1/3">
              <Link
                to={project.path}
                className={`glass-card group flex flex-col h-full rounded-2xl overflow-hidden border ${project.id === currentId ? 'border-[#3b82f6]/50 bg-white/10' : 'border-white/5 bg-white/5'} hover:bg-white/10 transition-all duration-500`}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.banner}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-white/60">{project.description.slice(0, 60)}...</p>
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden md:flex justify-center gap-4 mt-8">
          <CarouselPrevious className="static translate-y-0 translate-x-0" />
          <CarouselNext className="static translate-y-0 translate-x-0" />
        </div>
      </Carousel>
    </section>
  );
}
