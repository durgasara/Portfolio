import { motion } from "framer-motion";
import { HiAcademicCap } from "react-icons/hi";
import { education } from "../../data/portfolio";
import { SectionHeading, FadeIn } from "../shared/SectionHeading";

export function Education() {
  return (
    <section id="education" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading title="Education" />

        <FadeIn>
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="mx-auto max-w-2xl rounded-2xl border p-8 text-center"
            style={{ borderColor: "var(--border)", backgroundColor: "var(--card)" }}
          >
            <div
              className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full"
              style={{ backgroundColor: "color-mix(in srgb, var(--primary) 15%, transparent)" }}
            >
              <HiAcademicCap size={32} style={{ color: "var(--primary)" }} />
            </div>

            <h3 className="font-heading text-xl font-bold sm:text-2xl" style={{ color: "var(--text)" }}>
              {education.institution}
            </h3>
            <p className="mt-2 text-base" style={{ color: "var(--text-secondary)" }}>
              {education.degree}
            </p>

            <div className="mt-6 inline-flex flex-col items-center rounded-xl px-8 py-4" style={{ backgroundColor: "color-mix(in srgb, var(--accent) 10%, transparent)" }}>
              <span className="text-xs font-medium uppercase tracking-wider" style={{ color: "var(--text-secondary)" }}>
                CGPA
              </span>
              <span className="mt-1 font-heading text-3xl font-bold" style={{ color: "var(--accent)" }}>
                {education.cgpa}
              </span>
            </div>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}
