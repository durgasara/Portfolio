import { motion } from "framer-motion";
import { skillCategories } from "../../data/portfolio";
import { SectionHeading, FadeIn } from "../shared/SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28" style={{ backgroundColor: "color-mix(in srgb, var(--card) 30%, var(--bg))" }}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading title="Skills" subtitle="Technologies I work with" />

        <div className="grid gap-6 sm:grid-cols-2">
          {skillCategories.map((category, catIndex) => (
            <FadeIn key={category.title} delay={catIndex * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                className="h-full rounded-2xl border p-6 transition-shadow hover:shadow-lg hover:shadow-blue-500/5"
                style={{ borderColor: "var(--border)", backgroundColor: "var(--card)" }}
              >
                <h3
                  className="mb-5 font-heading text-lg font-semibold"
                  style={{ color: "var(--primary)" }}
                >
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="mb-1.5 flex justify-between text-sm">
                        <span style={{ color: "var(--text)" }}>{skill.name}</span>
                        <span style={{ color: "var(--text-secondary)" }}>{skill.level}%</span>
                      </div>
                      <div
                        className="h-2 overflow-hidden rounded-full"
                        style={{ backgroundColor: "color-mix(in srgb, var(--text-secondary) 15%, transparent)" }}
                      >
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: skillIndex * 0.05 }}
                          className="h-full rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
