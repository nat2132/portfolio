"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FaLocationArrow, FaGithub, FaServer } from "react-icons/fa6";
import { HiMagnifyingGlass, HiArrowTopRightOnSquare } from "react-icons/hi2";

import {
  projects,
  projectCategories,
  type Project,
  type ProjectCategory,
} from "@/data";

const TECH_ICONS: Record<string, string> = {
  React: "/re.svg",
  Next: "/next.svg",
  "Next.js": "/next.svg",
  "Tailwind CSS": "/tail.svg",
  TypeScript: "/ts.svg",
  Django: "/django.svg",
  MongoDB: "/mongodb.svg",
  "Three.js": "/three.svg",
  GSAP: "/gsap.svg",
  "Framer Motion": "/fm.svg",
};

const statusStyles: Record<Project["status"], string> = {
  live: "bg-emerald-500/10 text-emerald-300 border-emerald-400/30",
  prototype: "bg-amber-500/10 text-amber-200 border-amber-400/30",
  "in-progress": "bg-sky-500/10 text-sky-300 border-sky-400/30",
};

const statusLabel: Record<Project["status"], string> = {
  live: "Live App",
  prototype: "Prototype",
  "in-progress": "In Progress",
};

const initials = (title: string) =>
  title
    .split(/[\s—-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]!.toUpperCase())
    .join("");

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: (index % 3) * 0.08 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-black-200/40 backdrop-blur transition-colors duration-300 hover:border-purple/40 focus-within:border-purple/40"
    >
      {/* Preview Image */}
      <a
        href={project.live ?? project.repo}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block h-48 sm:h-52 w-full overflow-hidden bg-black-100"
        aria-label={`${project.title} live demo`}
      >
        {project.img ? (
          <img
            src={project.img}
            alt={`${project.title} screenshot`}
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            loading="lazy"
          />
        ) : (
          <div
            className="flex h-full w-full items-center justify-center"
            style={{
              background:
                "linear-gradient(135deg, rgba(88,57,251,0.25), rgba(4,7,29,1) 60%)",
            }}
          >
            <span className="text-5xl font-bold text-white/20">
              {initials(project.title)}
            </span>
          </div>
        )}

        {/* Status & Category Badge */}
        <div className="absolute left-4 top-4 flex items-center gap-2">
          <span
            className={`rounded-full border px-3 py-1 text-[11px] font-medium tracking-wide backdrop-blur ${statusStyles[project.status]}`}
          >
            {statusLabel[project.status]}
          </span>
          <span className="rounded-full border border-white/10 bg-black/60 px-2.5 py-1 text-[10px] uppercase tracking-wider text-white-200 backdrop-blur">
            {project.category === "landing" ? "Landing Page" : "Full-Stack"}
          </span>
        </div>
      </a>

      {/* Card Content */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-bold text-lg sm:text-xl line-clamp-1 text-white">
          {project.title}
        </h3>

        <p className="mt-2 text-sm font-light leading-relaxed text-white-200 line-clamp-3 min-h-[3.75rem]">
          {project.des}
        </p>

        {/* Tech Badges */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.map((t) => {
            const icon = TECH_ICONS[t];
            return (
              <span
                key={t}
                className="flex items-center gap-1.5 rounded-md border border-white/10 bg-black px-2.5 py-1 text-[11px] text-white-200"
              >
                {icon && (
                  <img src={icon} alt="" className="h-3.5 w-3.5" loading="lazy" />
                )}
                {t}
              </span>
            );
          })}
        </div>

        {/* Actions */}
        <div className="mt-6 flex flex-wrap items-center gap-2 pt-2 border-t border-white/5">
          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-purple/30 bg-purple/10 px-3 py-2 text-xs font-medium text-purple-200 transition-colors hover:bg-purple/20 hover:text-white"
            >
              <FaLocationArrow className="text-[10px]" /> Live Site
            </a>
          ) : (
            <span className="flex cursor-not-allowed items-center gap-2 rounded-lg border border-black-300 bg-black-200/50 px-3 py-2 text-xs text-white-200/50">
              <HiArrowTopRightOnSquare className="text-[10px]" />
              {project.note ?? "Coming Soon"}
            </span>
          )}

          {project.api && (
            <a
              href={project.api}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-lg border border-blue-500/30 bg-blue-500/10 px-2.5 py-2 text-xs font-medium text-blue-300 transition-colors hover:bg-blue-500/20 hover:text-white"
              title={`Production API: ${project.api}`}
            >
              <FaServer className="text-[10px]" /> API
            </a>
          )}

          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto flex items-center gap-1.5 rounded-lg border border-white/10 bg-black-200 px-3 py-2 text-xs text-white-200 transition-colors hover:border-purple/50 hover:text-white"
          >
            <FaGithub className="text-xs" /> Source Code
          </a>
        </div>
      </div>
    </motion.article>
  );
}

const ProjectsSection = () => {
  const [category, setCategory] = useState<ProjectCategory | "all">("all");
  const [query, setQuery] = useState("");

  const filteredProjects = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((p) => {
      const inCategory = category === "all" || p.category === category;
      const inQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.des.toLowerCase().includes(q) ||
        p.tech.some((t) => t.toLowerCase().includes(q));
      return inCategory && inQuery;
    });
  }, [category, query]);

  const landingProjects = useMemo(
    () => filteredProjects.filter((p) => p.category === "landing"),
    [filteredProjects]
  );

  const fullstackProjects = useMemo(
    () => filteredProjects.filter((p) => p.category === "fullstack"),
    [filteredProjects]
  );

  return (
    <section className="py-20" id="projects">
      <h1 className="heading">
        Featured <span className="text-purple">Projects</span>
      </h1>
      <p className="mt-4 text-center text-sm sm:text-base text-white-200 max-w-2xl mx-auto px-4">
        Explore my portfolio of fully deployed, functional full-stack web applications and high-conversion landing pages.
      </p>

      {/* Filter Controls */}
      <div className="mt-8 flex flex-col items-center justify-center gap-4 px-4 sm:flex-row sm:justify-between sm:px-10">
        <div className="flex items-center gap-1 sm:gap-2 rounded-xl bg-black-200/50 p-1.5 backdrop-blur border border-white/[0.08]">
          {projectCategories.map((c) => (
            <button
              key={c.id}
              onClick={() => setCategory(c.id)}
              className={`rounded-lg px-3.5 py-2 text-xs sm:text-sm font-medium transition-all ${
                category === c.id
                  ? "bg-purple text-white shadow-lg shadow-purple/20"
                  : "text-white-200 hover:text-white hover:bg-white/5"
              }`}
              aria-pressed={category === c.id}
            >
              {c.label}
            </button>
          ))}
        </div>

        <label className="flex w-full max-w-xs items-center gap-2 rounded-xl border border-white/[0.08] bg-black-200/50 px-3.5 py-2.5 backdrop-blur focus-within:border-purple/40">
          <HiMagnifyingGlass className="text-white-200 text-lg" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects or tech..."
            className="w-full bg-transparent text-xs sm:text-sm text-white placeholder:text-white-200/50 focus:outline-none"
            aria-label="Search projects"
          />
        </label>
      </div>

      {/* Category A: Landing Pages Section */}
      {(category === "all" || category === "landing") && landingProjects.length > 0 && (
        <div className="mt-14 px-4 sm:px-10">
          <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                Landing Pages
                <span className="rounded-full bg-purple/20 px-2.5 py-0.5 text-xs text-purple-300 font-normal">
                  {landingProjects.length}
                </span>
              </h2>
              <p className="text-xs sm:text-sm text-white-200 mt-1">
                High-performance marketing, 3D interactive, and brand experience landing pages.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {landingProjects.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </div>
        </div>
      )}

      {/* Category B: Full-Stack Development Section */}
      {(category === "all" || category === "fullstack") && fullstackProjects.length > 0 && (
        <div className="mt-16 px-4 sm:px-10">
          <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                Full-Stack Development
                <span className="rounded-full bg-purple/20 px-2.5 py-0.5 text-xs text-purple-300 font-normal">
                  {fullstackProjects.length}
                </span>
              </h2>
              <p className="text-xs sm:text-sm text-white-200 mt-1">
                Real interactive web applications connected to production backends, REST APIs, databases, and authentication systems.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {fullstackProjects.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </div>
        </div>
      )}

      {filteredProjects.length === 0 && (
        <p className="mt-16 text-center text-white-200">
          No projects match your search query — try another keyword.
        </p>
      )}
    </section>
  );
};

export default ProjectsSection;
