import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-20 pt-32 sm:pt-36 relative overflow-hidden" id="about">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-10 sm:my-16 z-10">
        <div className="max-w-[89vw] md:max-w-4xl lg:max-w-5xl flex flex-col items-center justify-center">

          {/* Profile Photo Avatar with Glow */}
          <div className="relative mb-6 group">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple via-blue-500 to-emerald-400 opacity-75 blur-md group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse" />
            <div className="relative h-32 w-32 sm:h-40 sm:w-40 md:h-44 md:w-44 rounded-full overflow-hidden border-2 border-white/20 bg-black-200 shadow-2xl">
              <img
                src="/natoli.png"
                alt="Natoli Adugna - Full-Stack Developer"
                className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <span className="absolute bottom-2 right-2 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-black-100"></span>
            </span>
          </div>

          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80 font-mono">
            Full-Stack Software Developer
          </p>

          <TextGenerateEffect
            words="Building real products, from pixel to production"
            className="text-center text-[32px] sm:text-[40px] md:text-5xl lg:text-6xl max-w-4xl"
          />

          <p className="text-center md:tracking-wider mb-6 mt-2 text-sm md:text-lg lg:text-xl text-white-200 max-w-2xl leading-relaxed">
            Hi! I&apos;m <span className="text-white font-semibold">Natoli Adugna</span> — a full-stack software engineer based in Ethiopia. I design and build complete, production-ready web applications: responsive frontends, scalable REST APIs, database architectures, and cloud deployments that work seamlessly.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="#projects">
              <MagicButton
                title="Explore My Work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
            <a
              href="mailto:natoliadugnatafa@gmail.com"
              className="px-6 py-3 rounded-lg border border-white/10 bg-black-200 hover:border-purple/50 text-white text-sm font-medium transition-all hover:bg-black-300"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
