import React, { useState, useEffect } from "react";
import { HeroSlider } from "@/components/HeroSlider";
import { Project } from "@/lib/projects";
import gsap from "gsap";

interface HeroProps {
  projects: Project[];
}

export const Hero: React.FC<HeroProps> = ({ projects }) => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const words = ["Web", "Motion", "Brand"];

  useEffect(() => {
    const handleTyping = () => {
      const currentFullWord = words[wordIndex];

      if (!isDeleting) {
        if (displayText.length < currentFullWord.length) {
          setDisplayText(currentFullWord.substring(0, displayText.length + 1));
          setTypingSpeed(50);
        } else {
          setTypingSpeed(1000);
          setIsDeleting(true);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentFullWord.substring(0, displayText.length - 1));
          setTypingSpeed(75);
        } else {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
          setTypingSpeed(300);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, wordIndex, typingSpeed]);

  useEffect(() => {
    gsap.from("#hero h1", {
      y: 60,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      delay: 0.2,
    });
  }, []);

  return (
    <section
      id="hero"
      data-scroll-section
      className="px-6 sm:px-8 md:px-8 lg:px-10 xl:px-40 gsap-section"
    >
      <div data-scroll-content className="w-full">
        <h1 className="mt-28 md:pt-12 text-2xl md:text-5xl flex flex-wrap items-center justify-center gap-y-1 gap-x-2 text-center">
          <span className="whitespace-nowrap">Soluções de</span>
          <span className="inline-flex items-center justify-center bg-[hsl(var(--primary))] 
          text-[hsl(var(--primary-foreground))] w-[120px] md:w-[220px] mx-2 text-center h-8 md:h-12">
            <span className=" relative">
              {displayText}
              <span className="w-[1px] bg-current cursor-blink inline-block h-8 md:h-12 absolute -right-2 top-1/2 -translate-y-1/2"></span>
            </span>
          </span>
          <span className="">Design para negócios</span>
          <p className="w-[300px] md:w-full text-xl tracking-widest text-gray-300 font-[200] mt-4 leading-7">
            Do layout ao low-code acelerado por Inteligência Artificial</p>
        </h1>
        <HeroSlider projects={projects} />
      </div>
    </section>
  );
};
