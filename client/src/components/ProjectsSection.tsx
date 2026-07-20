// Obsidian Intelligence — Projects grid section
import { motion } from "framer-motion";
import { Link } from "wouter";
import { useInView } from "@/hooks/useInView";
import { projects } from "@/data/projects";

const colorMap: Record<string, { text: string; bg: string; border: string }> = {
  amber: {
    text: "oklch(0.78 0.15 75)",
    bg: "oklch(0.78 0.15 75 / 0.10)",
    border: "oklch(0.78 0.15 75 / 0.25)",
  },
  cyan: {
    text: "oklch(0.72 0.12 200)",
    bg: "oklch(0.72 0.12 200 / 0.10)",
    border: "oklch(0.72 0.12 200 / 0.25)",
  },
  emerald: {
    text: "oklch(0.72 0.14 155)",
    bg: "oklch(0.72 0.14 155 / 0.10)",
    border: "oklch(0.72 0.14 155 / 0.25)",
  },
  violet: {
    text: "oklch(0.65 0.18 290)",
    bg: "oklch(0.65 0.18 290 / 0.10)",
    border: "oklch(0.65 0.18 290 / 0.25)",
  },
  rose: {
    text: "oklch(0.65 0.20 25)",
    bg: "oklch(0.65 0.20 25 / 0.10)",
    border: "oklch(0.65 0.20 25 / 0.25)",
  },
};

export default function ProjectsSection() {
  const { ref, inView } = useInView();

  return (
    <section
      id="projects"
      ref={ref}
      className="py-24 relative overflow-hidden"
      style={{ background: "oklch(0.10 0.012 260)" }}
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/manus-storage/projects-bg_c9e46d63.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.08,
        }}
      />
      <div className="absolute inset-0 z-0 dot-grid opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center gap-4 mb-2">
            <div className="h-px flex-1 max-w-[80px]" style={{ background: "oklch(0.78 0.15 75 / 0.4)" }} />
            <div
              className="text-xs font-medium tracking-widest uppercase"
              style={{ color: "oklch(0.78 0.15 75)", fontFamily: "'JetBrains Mono', monospace" }}
            >
              Intelligence Portfolio
            </div>
          </div>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4 text-left"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.92 0.005 60)" }}
          >
            Every Dataset Tells a Story.{" "}
            <span style={{ color: "oklch(0.78 0.15 75)" }}>I Find It.</span>
          </h2>
          <p className="text-base text-left max-w-xl" style={{ color: "oklch(0.55 0.01 260)" }}>
            Click any project to explore the full analysis, interactive dashboard charts, and key findings.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => {
            const c = colorMap[project.color] || colorMap.amber;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
              >
                <Link href={`/project/${project.id}`}>
                  <div
                    className="group p-6 rounded-xl h-full flex flex-col cursor-pointer transition-all duration-300"
                    style={{
                      background: "oklch(0.14 0.014 260)",
                      border: "1px solid oklch(0.22 0.015 260)",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLDivElement;
                      el.style.borderColor = c.border;
                      el.style.transform = "translateY(-4px)";
                      el.style.boxShadow = `0 8px 32px ${c.text}20`;
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLDivElement;
                      el.style.borderColor = "oklch(0.22 0.015 260)";
                      el.style.transform = "translateY(0)";
                      el.style.boxShadow = "none";
                    }}
                  >
                    {/* Category badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className="text-xs px-2.5 py-1 rounded-full font-medium"
                        style={{
                          background: c.bg,
                          color: c.text,
                          border: `1px solid ${c.border}`,
                          fontFamily: "'JetBrains Mono', monospace",
                        }}
                      >
                        {project.category}
                      </span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
                        style={{ color: "oklch(0.40 0.01 260)" }}
                      >
                        <path d="M7 17L17 7M17 7H7M17 7v10" />
                      </svg>
                    </div>

                    {/* Title */}
                    <h3
                      className="text-lg font-bold mb-2 leading-snug"
                      style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.92 0.005 60)" }}
                    >
                      {project.title}
                    </h3>
                    <p className="text-sm mb-4 flex-1 leading-relaxed" style={{ color: "oklch(0.55 0.01 260)" }}>
                      {project.subtitle}
                    </p>

                    {/* Metrics row */}
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {project.metrics.slice(0, 2).map((m) => (
                        <div
                          key={m.label}
                          className="p-2 rounded-lg text-center"
                          style={{ background: "oklch(0.10 0.012 260)" }}
                        >
                          <div className="text-base font-bold" style={{ color: c.text, fontFamily: "'Space Grotesk', sans-serif" }}>
                            {m.value}
                          </div>
                          <div className="text-xs" style={{ color: "oklch(0.45 0.01 260)" }}>
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-2 py-0.5 rounded"
                          style={{
                            background: "oklch(0.18 0.015 260)",
                            color: "oklch(0.55 0.01 260)",
                            fontFamily: "'JetBrains Mono', monospace",
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
