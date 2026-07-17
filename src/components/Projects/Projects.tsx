import { motion } from "framer-motion";
import { HiExternalLink, HiCode } from "react-icons/hi";
import { projects } from "../../data/portfolio";
import { SectionHeading, FadeIn } from "../shared/SectionHeading";

export function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28" style={{ backgroundColor: "color-mix(in srgb, var(--card) 30%, var(--bg))" }}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading title="Projects" subtitle="Things I've built" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => (
            <FadeIn key={project.title} delay={index * 0.1}>
              <motion.article
                whileHover={{ y: -8 }}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border transition-shadow hover:shadow-xl hover:shadow-blue-500/10"
                style={{ borderColor: "var(--border)", backgroundColor: "var(--card)" }}
              >
                <div className="relative h-44 bg-gradient-to-br from-blue-200/30 to-violet-100/40 dark:from-blue-900/5 dark:to-fuchsia-900/5 p-6">

                  <span
                    className="inline-block rounded-full px-3 py-1 text-xs font-medium"
                    style={{ backgroundColor: "color-mix(in srgb, var(--bg) 60%, transparent)", color: "var(--accent)" }}
                  >
                    {project.category}
                  </span>
                  <h3 className="mt-4 font-heading text-xl font-bold" style={{ color: "var(--text)" }}>
                    {project.title}
                  </h3>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="mb-4 flex-1 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {project.description}
                  </p>

                  <div className="mb-5 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg px-2.5 py-1 text-xs font-medium"
                        style={{
                          backgroundColor: "color-mix(in srgb, var(--primary) 12%, transparent)",
                          color: "var(--primary)",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-white transition-all hover:scale-[1.02]"
                      style={{ backgroundColor: "var(--primary)" }}
                    >
                      View Project
                      <HiExternalLink size={16} />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-medium transition-all hover:scale-[1.02]"
                      style={{ borderColor: "var(--border)", color: "var(--text-secondary)" }}
                      aria-label={`${project.title} source code`}
                    >
                      <HiCode size={18} />
                    </a>
                  </div>
                </div>
              </motion.article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
