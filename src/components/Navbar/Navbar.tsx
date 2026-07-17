import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX, HiSun, HiMoon } from "react-icons/hi";
import { navLinks } from "../../data/portfolio";
import { useActiveSection } from "../../hooks/useActiveSection";
import { useTheme } from "../../hooks/useTheme";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const activeSection = useActiveSection(navLinks.map((l) => l.id));
  const { theme, toggleTheme } = useTheme();

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 right-0 left-0 z-50 border-b backdrop-blur-md"
      style={{
        backgroundColor: "color-mix(in srgb, var(--bg) 85%, transparent)",
        borderColor: "var(--border)",
      }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <button
          onClick={() => handleNavClick("home")}
          className="font-heading text-xl font-bold"
          style={{ color: "var(--primary)" }}
        >
          SDS<span style={{ color: "var(--accent)" }}>.</span>
        </button>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className="relative rounded-lg px-3 py-2 text-sm font-medium transition-colors"
              style={{
                color: activeSection === link.id ? "var(--primary)" : "var(--text-secondary)",
              }}
            >
              {link.label}
              {activeSection === link.id && (
                <motion.span
                  layoutId="activeNav"
                  className="absolute inset-x-1 -bottom-0.5 h-0.5 rounded-full"
                  style={{ backgroundColor: "var(--primary)" }}
                />
              )}
            </button>
          ))}
          <button
            onClick={toggleTheme}
            className="ml-2 rounded-lg p-2 transition-colors hover:opacity-80"
            style={{ color: "var(--text-secondary)" }}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? <HiSun size={20} /> : <HiMoon size={20} />}
          </button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            className="rounded-lg p-2"
            style={{ color: "var(--text-secondary)" }}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? <HiSun size={20} /> : <HiMoon size={20} />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2"
            style={{ color: "var(--text)" }}
            aria-label="Toggle menu"
          >
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t md:hidden"
            style={{ borderColor: "var(--border)" }}
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className="rounded-lg px-4 py-3 text-left text-sm font-medium transition-colors"
                  style={{
                    color: activeSection === link.id ? "var(--primary)" : "var(--text-secondary)",
                    backgroundColor: activeSection === link.id ? "color-mix(in srgb, var(--primary) 10%, transparent)" : "transparent",
                  }}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
