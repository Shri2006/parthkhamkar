// Obsidian Intelligence — About section
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

export default function AboutSection() {
  const { ref, inView } = useInView();

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 relative overflow-hidden"
      style={{ background: "oklch(0.12 0.013 260)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            className="relative"
          >
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                border: "1px solid oklch(0.22 0.015 260)",
                boxShadow: "0 0 60px oklch(0.78 0.15 75 / 0.08)",
              }}
            >
              <img
                src="/manus-storage/about-visual_88d10124.jpg"
                alt="Data Analytics Workspace"
                className="w-full h-80 object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(135deg, oklch(0.78 0.15 75 / 0.05) 0%, transparent 60%)",
                }}
              />
            </div>
            {/* Floating badge */}
            <div
              className="absolute -bottom-4 -right-4 px-4 py-3 rounded-xl"
              style={{
                background: "oklch(0.14 0.014 260)",
                border: "1px solid oklch(0.78 0.15 75 / 0.3)",
                boxShadow: "0 0 20px oklch(0.78 0.15 75 / 0.15)",
              }}
            >
              <div
                className="text-2xl font-bold"
                style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.78 0.15 75)" }}
              >
                8.31
              </div>
              <div className="text-xs" style={{ color: "oklch(0.55 0.01 260)" }}>
                CGPA
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
          >
            <div
              className="text-xs font-medium mb-3 tracking-widest uppercase"
              style={{ color: "oklch(0.78 0.15 75)", fontFamily: "'JetBrains Mono', monospace" }}
            >
              About Me
            </div>
            <h2
              className="text-3xl sm:text-4xl font-bold mb-6 leading-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.92 0.005 60)" }}
            >
              Where Data Meets{" "}
              <span style={{ color: "oklch(0.78 0.15 75)" }}>Decision</span>
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: "oklch(0.60 0.01 260)" }}>
              Detail-oriented Computer Engineering graduate from K. J. College of Engineering
              and Management Research (CGPA: 8.31) with a strong foundation in data analysis,
              statistical reasoning, and database management.
            </p>
            <p className="text-base leading-relaxed mb-8" style={{ color: "oklch(0.60 0.01 260)" }}>
              Skilled in SQL, Python (Pandas, NumPy), and visualization tools including
              Power BI, Tableau, and Excel — with hands-on experience building dashboards
              and deriving actionable insights from data. Strong analytical thinking developed
              through web development and machine learning projects.
            </p>

            {/* Info grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Location", value: "Mumbai, India" },
                { label: "Education", value: "B.E. Computer Science" },
                { label: "Graduation", value: "2021 – 2025" },
                { label: "Email", value: "parth.d.khamkae2970@gmail.com" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-3 rounded-lg"
                  style={{ background: "oklch(0.16 0.015 260)", border: "1px solid oklch(0.22 0.015 260)" }}
                >
                  <div className="text-xs mb-1" style={{ color: "oklch(0.55 0.01 260)", fontFamily: "'JetBrains Mono', monospace" }}>
                    {item.label}
                  </div>
                  <div className="text-sm font-medium truncate" style={{ color: "oklch(0.85 0.005 60)" }}>
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
