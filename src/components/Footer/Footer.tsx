import { personalInfo } from "../../data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t py-8"
      style={{ borderColor: "var(--border)", backgroundColor: "color-mix(in srgb, var(--card) 40%, var(--bg))" }}
    >
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
          Designed &amp; Developed by{" "}
          <span className="font-semibold" style={{ color: "var(--primary)" }}>
            {personalInfo.name}
          </span>
        </p>
        <p className="mt-2 text-xs" style={{ color: "var(--text-secondary)" }}>
          &copy; {year} All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
