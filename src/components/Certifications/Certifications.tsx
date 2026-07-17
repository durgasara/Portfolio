import { motion } from "framer-motion";
import { HiBadgeCheck } from "react-icons/hi";
import { certifications } from "../../data/portfolio";
import { SectionHeading, FadeIn } from "../shared/SectionHeading";

export function Certifications() {
  return (
    <section id="certifications" className="py-20 sm:py-28" style={{ backgroundColor: "color-mix(in srgb, var(--card) 30%, var(--bg))" }}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading title="Certifications" />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert, index) => (
            <FadeIn key={cert.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                className="flex h-full flex-col items-center rounded-2xl border p-6 text-center transition-shadow hover:shadow-lg hover:shadow-cyan-500/5"
                style={{ borderColor: "var(--border)", backgroundColor: "var(--card)" }}
              >
                <div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-full"
                  style={{ backgroundColor: "color-mix(in srgb, var(--accent) 15%, transparent)" }}
                >
                  <HiBadgeCheck size={24} style={{ color: "var(--accent)" }} />
                </div>
                <h3 className="font-heading text-base font-semibold" style={{ color: "var(--text)" }}>
                  {cert.title}
                </h3>
                <p className="mt-2 text-xs" style={{ color: "var(--text-secondary)" }}>
                  {cert.description}
                </p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
