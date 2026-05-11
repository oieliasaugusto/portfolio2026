import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { cn } from "@/lib/utils";

interface MobileSliderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const MobileSlider: React.FC<MobileSliderProps> = ({ children, className, ...props }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    dragFree: true,
    active: isMobile,
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (emblaApi) emblaApi.reInit({ active: isMobile });
  }, [emblaApi, isMobile]);

  if (!isMobile) {
    return <div className={className} {...props}>{children}</div>;
  }

  return (
    <div className="overflow-hidden cursor-grab active:cursor-grabbing w-full" ref={emblaRef}>
      <div className="flex gap-4 px-6 py-4">
        {React.Children.map(children, (child) => (
          <div className="flex-[0_0_85%] min-w-0 h-full">
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};
