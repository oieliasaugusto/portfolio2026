import { useProjectAnimation } from "@/hooks/useProjectAnimation";
import OtherProjects from "@/components/OtherProjects";

export default function Reel() {
    const mainRef = useProjectAnimation();

    return (
        <main ref={mainRef} id="viewProject" className="px-6 md:px-10 lg:px-14 xl:px-40 py-24 min-h-screen bg-black">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-12 project-info-grid">
                <h1 className="text-5xl md:text-6xl font-bold tracking-tight">Motion <span className="text-[#ff5c35]">Reel</span></h1>
                <div>
                    <h3 className="text-2xl tracking-widest Manuscrita text-[#ff5c35]">O Portfólio</h3>
                    <p className="text-white/70 leading-relaxed max-w-[700px]">
                        Uma compilação de trabalhos de motion design, animação 2D e storytelling visual, desenvolvidos para marcas e estudos pessoais. (2021-2024).
                    </p>
                </div>
            </div>

            <section id="projectImages" className="project-images mt-12">
                <div className="overflow-hidden text-center flex flex-col items-center gap-16">

                    <div className="w-full lg:w-[60%]">
                        <video
                            src="/portfolio/reel/2024DEMOREEL.mp4"
                            controls
                            className="w-full h-auto rounded-3xl border border-white/10 shadow-2xl"
                        // poster="/portfolio/reel/Loop.gif"
                        />
                        {/* <h4 className="mt-6 text-2xl font-semibold">Demo Reel 2023</h4> */}
                        <p className="max-w-[700px] mx-auto text-white/60">Uma jornada visual com momentos de animação e design de 2023-2024.</p>
                    </div>

                    <div className="w-full lg:w-[60%] grid grid-cols-1">
                        <div className="flex flex-col items-center group gap-4">
                            <h4 className="mt-6 text-xl">VnW Animation</h4>
                            <div className="w-full overflow-hidden rounded-2xl border border-white/5 transition-all duration-500 group-hover:border-white/20">
                                <video
                                    src="/portfolio/reel/VnW_Animation.mp4"
                                    controls
                                    loop
                                    muted
                                    className="w-full h-auto"
                                />
                            </div>
                            <p className="text-white/50 text-sm !pb-0">Estudo de movimento e identidade para a marca Vai na Web.</p>
                        </div>
                    </div>

                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 pb-12">
                        <div className="flex flex-col items-center group">
                            <h4 className="text-lg">Character Design</h4>
                            <div className="w-full h-[500px] aspect-square overflow-hidden rounded-2xl border border-white/5">
                                <video
                                    src="/portfolio/reel/carol_avatar.mp4"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col items-center group">
                            <h4 className="text-lg">Rigging</h4>
                            <div className="w-full h-[500px] aspect-square overflow-hidden rounded-2xl border border-white/5">
                                <video
                                    src="/portfolio/reel/carol_rig_preview2.mp4"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <OtherProjects currentId="reel" />
        </main>
    );
}
