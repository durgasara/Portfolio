import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiPython,
  SiGit,
  SiHtml5,
  SiCss,
} from "react-icons/si";
import { HiDownload, HiArrowRight } from "react-icons/hi";
import { personalInfo, floatingTechIcons } from "../../data/portfolio";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  react: SiReact,
  typescript: SiTypescript,
  javascript: SiJavascript,
  nodejs: SiNodedotjs,
  python: SiPython,
  git: SiGit,
  html5: SiHtml5,
  css3: SiCss,
};

const floatingPositions = [
  { top: "15%", left: "8%", delay: 0 },
  { top: "25%", right: "10%", delay: 0.5 },
  { top: "60%", left: "5%", delay: 1 },
  { top: "70%", right: "8%", delay: 1.5 },
  { top: "40%", left: "15%", delay: 0.8 },
  { top: "50%", right: "15%", delay: 1.2 },
  { top: "20%", left: "25%", delay: 0.3 },
  { top: "75%", right: "20%", delay: 1.8 },
];

function TypingEffect({ texts }: { texts: string[] }) {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = texts[textIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(current.slice(0, charIndex + 1));
          if (charIndex + 1 === current.length) {
            setTimeout(() => setIsDeleting(true), 2000);
          } else {
            setCharIndex(charIndex + 1);
          }
        } else {
          setDisplayText(current.slice(0, charIndex - 1));
          if (charIndex === 0) {
            setIsDeleting(false);
            setTextIndex((textIndex + 1) % texts.length);
          } else {
            setCharIndex(charIndex - 1);
          }
        }
      },
      isDeleting ? 50 : 100
    );
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts]);

  return (
    <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="inline-block w-[3px] h-[1em] ml-1 align-middle"
        style={{ backgroundColor: "var(--accent)" }}
      />
    </span>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-[var(--primary)] opacity-[0.07] blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-[var(--accent)] opacity-[0.07] blur-3xl" />
      </div>

      {/* Floating tech icons */}
      {floatingTechIcons.map((icon, i) => {
        const Icon = iconMap[icon];
        const pos = floatingPositions[i];
        if (!Icon || !pos) return null;
        return (
          <motion.div
            key={icon}
            className="pointer-events-none absolute hidden opacity-20 lg:block"
            style={{ top: pos.top, left: pos.left, right: pos.right }}
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4 + i * 0.5, repeat: Infinity, delay: pos.delay }}
          >
            <Icon size={32} className="text-[var(--text-secondary)]" />
          </motion.div>
        );
      })}

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-lg"
          style={{ color: "var(--text-secondary)" }}
        >
          Hi, I&apos;m
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          style={{ color: "var(--text)" }}
        >
          {personalInfo.name}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-4 h-10 text-2xl font-semibold sm:text-3xl"
        >
          <TypingEffect texts={personalInfo.titles} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-6 max-w-2xl text-base leading-relaxed sm:text-lg"
          style={{ color: "var(--text-secondary)" }}
        >
          {personalInfo.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-8 flex flex-wrap gap-4"
        >
          <a
            href={personalInfo.resumePath}
            download
            className="group inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
            style={{ backgroundColor: "var(--primary)" }}
          >
            <HiDownload size={18} />
            Download Resume
          </a>
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="group inline-flex items-center gap-2 rounded-xl border px-6 py-3 text-sm font-semibold transition-all hover:scale-105"
            style={{
              borderColor: "var(--border)",
              color: "var(--text)",
              backgroundColor: "var(--card)",
            }}
          >
            View Projects
            <HiArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
