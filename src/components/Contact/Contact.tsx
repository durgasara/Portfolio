import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { HiPaperAirplane } from "react-icons/hi";
import { personalInfo } from "../../data/portfolio";
import { SectionHeading, FadeIn } from "../shared/SectionHeading";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey || serviceId === "your_service_id") {
      setStatus("error");
      return;
    }

    try {
      await emailjs.send(serviceId, templateId, formData, publicKey);
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const socialLinks = [
    { icon: FaGithub, href: personalInfo.github, label: "GitHub" },
    { icon: FaLinkedin, href: personalInfo.linkedin, label: "LinkedIn" },
    { icon: FaEnvelope, href: `mailto:${personalInfo.email}`, label: "Email" },
  ];

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading title="Contact" subtitle="Let's work together" />

        <div className="grid gap-12 lg:grid-cols-2">
          <FadeIn>
            <div>
              <p className="mb-8 text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>

              <div className="flex gap-4">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="flex h-12 w-12 items-center justify-center rounded-xl border transition-colors"
                    style={{ borderColor: "var(--border)", color: "var(--text-secondary)", backgroundColor: "var(--card)" }}
                    aria-label={label}
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <form
              onSubmit={handleSubmit}
              className="space-y-5 rounded-2xl border p-6 sm:p-8"
              style={{ borderColor: "var(--border)", backgroundColor: "var(--card)" }}
            >
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium" style={{ color: "var(--text)" }}>
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-xl border px-4 py-3 text-sm outline-none transition-colors focus:ring-2"
                  style={{
                    borderColor: "var(--border)",
                    backgroundColor: "var(--bg)",
                    color: "var(--text)",
                  }}
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium" style={{ color: "var(--text)" }}>
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-xl border px-4 py-3 text-sm outline-none transition-colors focus:ring-2"
                  style={{
                    borderColor: "var(--border)",
                    backgroundColor: "var(--bg)",
                    color: "var(--text)",
                  }}
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium" style={{ color: "var(--text)" }}>
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full resize-none rounded-xl border px-4 py-3 text-sm outline-none transition-colors focus:ring-2"
                  style={{
                    borderColor: "var(--border)",
                    backgroundColor: "var(--bg)",
                    color: "var(--text)",
                  }}
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-white transition-all hover:scale-[1.02] disabled:opacity-60"
                style={{ backgroundColor: "var(--primary)" }}
              >
                <HiPaperAirplane size={18} />
                {status === "sending" ? "Sending..." : "Send"}
              </button>

              {status === "success" && (
                <p className="text-center text-sm text-emerald-400">Message sent successfully!</p>
              )}
              {status === "error" && (
                <p className="text-center text-sm text-red-400">
                  Failed to send. Configure EmailJS in .env or try again later.
                </p>
              )}
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
