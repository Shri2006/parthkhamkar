// Obsidian Intelligence — Experience & Education timeline
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

const timeline = [
  {
    type: "work",
    title: "Web Developer",
    org: "EY (Ernst & Young)",
    period: "Feb 2024 – Apr 2024",
    points: [
      "Developed and maintained responsive web applications using HTML, CSS, JavaScript, and modern frameworks.",
      "Collaborated with cross-functional teams to design and optimize dynamic websites.",
      "Ensured seamless integration with backend services and APIs, building a foundation in structured data handling.",
    ],
    color: "oklch(0.78 0.15 75)",
  },
  {
    type: "edu",
    title: "B.E. Computer Science",
    org: "K. J. College of Engineering and Management Research",
    period: "2021 – 2025",
    points: ["CGPA: 8.31", "SGPA: 8.70", "Specialization in Data Analytics & Machine Learning"],
    color: "oklch(0.72 0.12 200)",
  },
  {
    type: "edu",
    title: "HSC (XII) — 87.67%",
    org: "R. R. Shinde Jr. College",
    period: "2019 – 2021",
    points: ["Science stream", "Strong foundation in Mathematics and Statistics"],
    color: "oklch(0.72 0.14 155)",
  },
  {
    type: "edu",
    title: "SSC (X) — 89.40%",
    org: "Sadhana Vidyalaya",
    period: "2013 – 2019",
    points: ["Consistent academic performer"],
    color: "oklch(0.65 0.18 290)",
  },
];

export default function ExperienceSection() {
  const { ref, inView } = useInView();

  return (
    <section
      id="experience"
      ref={ref}
      className="py-24 relative"
      style={{ background: "oklch(0.12 0.013 260)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
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
              Career Path
            </div>
          </div>
          <h2
            className="text-3xl sm:text-4xl font-bold text-left"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.92 0.005 60)" }}
          >
            Built on Rigor,{" "}
            <span style={{ color: "oklch(0.78 0.15 75)" }}>Driven by Curiosity</span>
          </h2>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-px"
            style={{ background: "linear-gradient(to bottom, oklch(0.78 0.15 75 / 0.5), oklch(0.22 0.015 260) 80%, transparent)" }}
          />

          {timeline.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.23, 1, 0.32, 1] }}
              className="relative pl-16 pb-10"
            >
              {/* Dot */}
              <div
                className="absolute left-4 top-1.5 w-4 h-4 rounded-full border-2 -translate-x-1/2"
                style={{
                  background: "oklch(0.12 0.013 260)",
                  borderColor: item.color,
                  boxShadow: `0 0 10px ${item.color}60`,
                }}
              />

              <div
                className="p-5 rounded-xl"
                style={{
                  background: "oklch(0.14 0.014 260)",
                  border: `1px solid oklch(0.22 0.015 260)`,
                  transition: "border-color 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = `${item.color}50`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "oklch(0.22 0.015 260)";
                }}
              >
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <div
                      className="text-base font-semibold"
                      style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.92 0.005 60)" }}
                    >
                      {item.title}
                    </div>
                    <div className="text-sm mt-0.5" style={{ color: item.color }}>
                      {item.org}
                    </div>
                  </div>
                  <span
                    className="text-xs px-2.5 py-1 rounded-full"
                    style={{
                      background: `${item.color}15`,
                      color: item.color,
                      fontFamily: "'JetBrains Mono', monospace",
                      border: `1px solid ${item.color}30`,
                    }}
                  >
                    {item.period}
                  </span>
                </div>
                <ul className="space-y-1.5">
                  {item.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm" style={{ color: "oklch(0.60 0.01 260)" }}>
                      <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: item.color }} />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
