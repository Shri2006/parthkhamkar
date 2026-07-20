// Obsidian Intelligence — Skills section with animated bars
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { skills } from "@/data/projects";

const colorMap: Record<string, string> = {
  amber: "oklch(0.78 0.15 75)",
  cyan: "oklch(0.72 0.12 200)",
  emerald: "oklch(0.72 0.14 155)",
};

function SkillBar({ name, level, delay, color }: { name: string; level: number; delay: number; color: string }) {
  const { ref, inView } = useInView();
  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium" style={{ color: "oklch(0.85 0.005 60)", fontFamily: "'Space Grotesk', sans-serif" }}>
          {name}
        </span>
        <span className="text-xs font-medium" style={{ color, fontFamily: "'JetBrains Mono', monospace" }}>
          {level}%
        </span>
      </div>
      <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "oklch(0.20 0.015 260)" }}>
        <motion.div
          className="h-full rounded-full"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.0, delay, ease: [0.23, 1, 0.32, 1] }}
          style={{ background: `linear-gradient(to right, ${color}, ${color}99)` }}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const { ref, inView } = useInView();

  return (
    <section
      id="skills"
      ref={ref}
      className="py-24 relative"
      style={{ background: "oklch(0.10 0.012 260)" }}
    >
      <div className="absolute inset-0 dot-grid opacity-20" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center gap-4 justify-start mb-2">
            <div className="h-px flex-1 max-w-[80px]" style={{ background: "oklch(0.78 0.15 75 / 0.4)" }} />
            <div
              className="text-xs font-medium tracking-widest uppercase"
              style={{ color: "oklch(0.78 0.15 75)", fontFamily: "'JetBrains Mono', monospace" }}
            >
              Technical Arsenal
            </div>
          </div>
          <h2
            className="text-3xl sm:text-4xl font-bold text-left"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.92 0.005 60)" }}
          >
            The Tools That Extract{" "}
            <span style={{ color: "oklch(0.78 0.15 75)" }}>Signal from Noise</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-6 rounded-xl"
            style={{ background: "oklch(0.14 0.014 260)", border: "1px solid oklch(0.22 0.015 260)" }}
          >
            <h3
              className="text-sm font-semibold mb-5 flex items-center gap-2"
              style={{ color: "oklch(0.78 0.15 75)", fontFamily: "'Space Grotesk', sans-serif" }}
            >
              <span className="w-2 h-2 rounded-full" style={{ background: "oklch(0.78 0.15 75)" }} />
              Languages & Query
            </h3>
            {skills.languages.map((s, i) => (
              <SkillBar key={s.name} name={s.name} level={s.level} delay={i * 0.08} color="oklch(0.78 0.15 75)" />
            ))}
          </motion.div>

          {/* Visualization */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6 rounded-xl"
            style={{ background: "oklch(0.14 0.014 260)", border: "1px solid oklch(0.22 0.015 260)" }}
          >
            <h3
              className="text-sm font-semibold mb-5 flex items-center gap-2"
              style={{ color: "oklch(0.72 0.12 200)", fontFamily: "'Space Grotesk', sans-serif" }}
            >
              <span className="w-2 h-2 rounded-full" style={{ background: "oklch(0.72 0.12 200)" }} />
              BI & Visualization
            </h3>
            {skills.visualization.map((s, i) => (
              <SkillBar key={s.name} name={s.name} level={s.level} delay={i * 0.08} color="oklch(0.72 0.12 200)" />
            ))}
            <h3
              className="text-sm font-semibold mb-4 mt-6 flex items-center gap-2"
              style={{ color: "oklch(0.72 0.14 155)", fontFamily: "'Space Grotesk', sans-serif" }}
            >
              <span className="w-2 h-2 rounded-full" style={{ background: "oklch(0.72 0.14 155)" }} />
              Databases
            </h3>
            {skills.databases.map((s, i) => (
              <SkillBar key={s.name} name={s.name} level={s.level} delay={i * 0.08} color="oklch(0.72 0.14 155)" />
            ))}
          </motion.div>

          {/* Concepts & Tools */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-6 rounded-xl"
            style={{ background: "oklch(0.14 0.014 260)", border: "1px solid oklch(0.22 0.015 260)" }}
          >
            <h3
              className="text-sm font-semibold mb-5 flex items-center gap-2"
              style={{ color: "oklch(0.65 0.18 290)", fontFamily: "'Space Grotesk', sans-serif" }}
            >
              <span className="w-2 h-2 rounded-full" style={{ background: "oklch(0.65 0.18 290)" }} />
              Analysis Concepts
            </h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {skills.concepts.map((c) => (
                <span
                  key={c}
                  className="px-2.5 py-1 rounded-md text-xs font-medium"
                  style={{
                    background: "oklch(0.65 0.18 290 / 0.12)",
                    border: "1px solid oklch(0.65 0.18 290 / 0.25)",
                    color: "oklch(0.65 0.18 290)",
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  {c}
                </span>
              ))}
            </div>
            <h3
              className="text-sm font-semibold mb-4 flex items-center gap-2"
              style={{ color: "oklch(0.65 0.20 25)", fontFamily: "'Space Grotesk', sans-serif" }}
            >
              <span className="w-2 h-2 rounded-full" style={{ background: "oklch(0.65 0.20 25)" }} />
              Other Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.tools.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-md text-xs font-medium"
                  style={{
                    background: "oklch(0.65 0.20 25 / 0.12)",
                    border: "1px solid oklch(0.65 0.20 25 / 0.25)",
                    color: "oklch(0.65 0.20 25)",
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
