import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="mb-12 text-center"
    >
      <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: "var(--text)" }}>
        {title}
      </h2>
      <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]" />
      {subtitle && (
        <p className="mt-4 text-base" style={{ color: "var(--text-secondary)" }}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function FadeIn({ children, delay = 0, className = "" }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
