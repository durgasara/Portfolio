import { motion } from "framer-motion";
import { personalInfo } from "../../data/portfolio";
import { SectionHeading, FadeIn } from "../shared/SectionHeading";

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading title="About Me" />

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <FadeIn>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative mx-auto max-w-sm lg:mx-0"
            >
              <div
                className="absolute -inset-3 rounded-2xl opacity-50 blur-lg"
                style={{ background: "linear-gradient(135deg, var(--primary), var(--accent))" }}
              />
              <div
                className="relative overflow-hidden rounded-2xl border"
                style={{ borderColor: "var(--border)", backgroundColor: "var(--card)" }}
              >
                <img
                  src="/profile.jpeg"
                  alt="Sri Durgadevi S"
                  className="aspect-square w-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src =
                      "data:image/svg+xml," +
                      encodeURIComponent(
                        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><rect fill="#1E293B" width="400" height="400"/><text x="200" y="210" text-anchor="middle" font-family="Poppins,sans-serif" font-size="80" font-weight="700" fill="#3B82F6">SDS</text></svg>`
                      );
                  }}
                />
              </div>
            </motion.div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-base leading-relaxed sm:text-lg" style={{ color: "var(--text-secondary)" }}>
              {personalInfo.about}
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {[
                {
                  label: "Focus",
                  value: [
                    "Frontend Web Development",
                    "React.js",
                    "React Native (Expo)",
                  ].join(", "),
                },
                {
                  label: "Specialty",
                  value: "React & React Native",
                },
                {
                  label: "Passion",
                  value: "Clean Code",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border p-4 text-center transition-transform hover:scale-105"
                  style={{ borderColor: "var(--border)", backgroundColor: "var(--card)" }}
                >
                  <p className="text-xs font-medium uppercase tracking-wider" style={{ color: "var(--text-secondary)" }}>
                    {item.label}
                  </p>
                  <p className="mt-1 font-heading text-sm font-semibold" style={{ color: "var(--text)" }}>
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
