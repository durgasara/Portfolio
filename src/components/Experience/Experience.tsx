import { motion } from "framer-motion";
import { HiBriefcase } from "react-icons/hi";
import { experiences } from "../../data/portfolio";
import { SectionHeading, FadeIn } from "../shared/SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading title="Experience" subtitle="My professional journey" />

        <div className="relative space-y-8">
          <div
            className="absolute top-0 left-6 hidden h-full w-px sm:block"
            style={{ backgroundColor: "var(--border)" }}
          />

          {experiences.map((exp, index) => (
            <FadeIn key={exp.company} delay={index * 0.15}>
              <motion.div
                whileHover={{ x: 4 }}
                className="relative rounded-2xl border p-6 sm:ml-12"
                style={{ borderColor: "var(--border)", backgroundColor: "var(--card)" }}
              >
                <div
                  className="absolute top-6 -left-12 hidden h-10 w-10 items-center justify-center rounded-full sm:flex"
                  style={{ backgroundColor: "var(--primary)" }}
                >
                  <HiBriefcase className="text-white" size={18} />
                </div>

                <h3 className="font-heading text-xl font-semibold" style={{ color: "var(--text)" }}>
                  {exp.company}
                </h3>
                <p className="mt-1 text-sm font-medium" style={{ color: "var(--accent)" }}>
                  {exp.role}
                </p>

                {exp.highlights.length > 0 && (
                  <ul className="mt-4 space-y-2">
                    {exp.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: "var(--primary)" }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
