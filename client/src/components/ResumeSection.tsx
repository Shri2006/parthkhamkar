// Obsidian Intelligence — Resume viewer and downloader
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

export default function ResumeSection() {
  const { ref, inView } = useInView();
  const [viewing, setViewing] = useState(false);

  // Resume content rendered as structured HTML for viewing
  return (
    <section
      id="resume"
      ref={ref}
      className="py-24 relative"
      style={{ background: "oklch(0.12 0.013 260)" }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center gap-4 mb-2">
            <div className="h-px flex-1 max-w-[80px]" style={{ background: "oklch(0.78 0.15 75 / 0.4)" }} />
            <div
              className="text-xs font-medium tracking-widest uppercase"
              style={{ color: "oklch(0.78 0.15 75)", fontFamily: "'JetBrains Mono', monospace" }}
            >
              Documents
            </div>
          </div>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4 text-left"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.92 0.005 60)" }}
          >
            The Full{" "}
            <span style={{ color: "oklch(0.78 0.15 75)" }}>Intelligence Brief</span>
          </h2>
          <p className="text-base text-left" style={{ color: "oklch(0.55 0.01 260)" }}>
            View or download Parth's complete resume — every project, skill, and milestone.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="rounded-2xl overflow-hidden"
          style={{ border: "1px solid oklch(0.22 0.015 260)" }}
        >
          {/* Action bar */}
          <div
            className="flex items-center justify-between px-6 py-4"
            style={{ background: "oklch(0.14 0.014 260)", borderBottom: "1px solid oklch(0.22 0.015 260)" }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: "oklch(0.78 0.15 75 / 0.15)", border: "1px solid oklch(0.78 0.15 75 / 0.3)" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="oklch(0.78 0.15 75)" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-semibold" style={{ color: "oklch(0.92 0.005 60)", fontFamily: "'Space Grotesk', sans-serif" }}>
                  Parth_Khamkar_Resume.pdf
                </div>
                <div className="text-xs" style={{ color: "oklch(0.45 0.01 260)" }}>
                  Data Analytics Portfolio
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setViewing(!viewing)}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 active:scale-95"
                style={{
                  background: viewing ? "oklch(0.78 0.15 75 / 0.15)" : "oklch(0.18 0.015 260)",
                  color: viewing ? "oklch(0.78 0.15 75)" : "oklch(0.70 0.01 260)",
                  border: `1px solid ${viewing ? "oklch(0.78 0.15 75 / 0.3)" : "oklch(0.25 0.015 260)"}`,
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                {viewing ? "Hide Resume" : "View Resume"}
              </button>
              <a
                href="/Parth_Khamkar_Resume.pdf"
                download="Parth_Khamkar_Resume.pdf"
                className="px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 active:scale-95 flex items-center gap-2"
                style={{
                  background: "oklch(0.78 0.15 75)",
                  color: "oklch(0.10 0.012 260)",
                  fontFamily: "'Space Grotesk', sans-serif",
                  boxShadow: "0 0 16px oklch(0.78 0.15 75 / 0.3)",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 24px oklch(0.78 0.15 75 / 0.5)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 16px oklch(0.78 0.15 75 / 0.3)";
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download
              </a>
            </div>
          </div>

          {/* Resume viewer */}
          {viewing && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className="p-8"
              style={{ background: "oklch(0.11 0.012 260)" }}
            >
              <ResumeContent />
            </motion.div>
          )}
        </motion.div>

        {/* Contact row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap justify-center gap-6"
        >
          {[
            { icon: "📞", label: "+91 8080049072", href: "tel:+918080049072" },
            { icon: "✉️", label: "parth.d.khamkae2970@gmail.com", href: "mailto:parth.d.khamkae2970@gmail.com" },
            { icon: "💼", label: "LinkedIn", href: "https://linkedin.com/in/parth-khamkar-704144241" },
          ].map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm transition-all duration-200"
              style={{
                background: "oklch(0.14 0.014 260)",
                border: "1px solid oklch(0.22 0.015 260)",
                color: "oklch(0.70 0.01 260)",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "oklch(0.78 0.15 75 / 0.4)";
                (e.currentTarget as HTMLAnchorElement).style.color = "oklch(0.78 0.15 75)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "oklch(0.22 0.015 260)";
                (e.currentTarget as HTMLAnchorElement).style.color = "oklch(0.70 0.01 260)";
              }}
            >
              <span>{c.icon}</span>
              <span style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{c.label}</span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ResumeContent() {
  const sectionStyle = {
    borderBottom: "1px solid oklch(0.20 0.015 260)",
    paddingBottom: "1.5rem",
    marginBottom: "1.5rem",
  };
  const headingStyle = {
    fontFamily: "'Space Grotesk', sans-serif",
    color: "oklch(0.78 0.15 75)",
    fontSize: "0.7rem",
    fontWeight: 600,
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
    marginBottom: "0.75rem",
  };
  const h3Style = {
    fontFamily: "'Space Grotesk', sans-serif",
    color: "oklch(0.92 0.005 60)",
    fontWeight: 600,
    fontSize: "0.95rem",
  };
  const bodyStyle = { color: "oklch(0.60 0.01 260)", fontSize: "0.85rem", lineHeight: 1.7 };

  return (
    <div className="max-w-3xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8" style={sectionStyle}>
        <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.92 0.005 60)", fontSize: "1.6rem", fontWeight: 700 }}>
          PARTH DADASAHEB KHAMKAR
        </h1>
        <p style={{ color: "oklch(0.55 0.01 260)", fontSize: "0.8rem", marginTop: "0.5rem" }}>
          +91 8080049072 · parth.d.khamkae2970@gmail.com · linkedin.com/in/parth-khamkar-704144241
        </p>
      </div>

      {/* Summary */}
      <div style={sectionStyle}>
        <div style={headingStyle}>Professional Summary</div>
        <p style={bodyStyle}>
          Detail-oriented Computer Engineering graduate with a strong foundation in data analysis, statistical reasoning,
          and database management. Skilled in SQL, Python (Pandas, NumPy), and visualization tools including Power BI,
          Tableau, and Excel, with hands-on experience building dashboards and deriving actionable insights from data.
        </p>
      </div>

      {/* Experience */}
      <div style={sectionStyle}>
        <div style={headingStyle}>Work Experience</div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <div style={h3Style}>EY — Web Developer</div>
            <div style={{ color: "oklch(0.72 0.12 200)", fontSize: "0.8rem" }}>Feb 2024 – Apr 2024</div>
          </div>
        </div>
        <ul style={{ marginTop: "0.5rem", paddingLeft: "1rem" }}>
          {["Developed and maintained responsive web applications using HTML, CSS, JavaScript, and modern frameworks.",
            "Collaborated with cross-functional teams to design and optimize dynamic websites.",
            "Ensured seamless integration with backend services and APIs."].map((p) => (
            <li key={p} style={{ ...bodyStyle, marginBottom: "0.25rem" }}>• {p}</li>
          ))}
        </ul>
      </div>

      {/* Projects */}
      <div style={sectionStyle}>
        <div style={headingStyle}>Project Experience</div>
        {[
          { title: "Retail Sales Performance Dashboard", tech: "Power BI, SQL, Excel" },
          { title: "Customer Churn Analytics Dashboard", tech: "Python, Tableau, SQL" },
          { title: "OpenCV-Based Home Automation", tech: "Python, OpenCV, MediaPipe, YOLOv11" },
        ].map((p) => (
          <div key={p.title} style={{ marginBottom: "0.75rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={h3Style}>{p.title}</div>
              <div style={{ color: "oklch(0.55 0.01 260)", fontSize: "0.75rem", fontFamily: "'JetBrains Mono', monospace" }}>{p.tech}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Skills */}
      <div style={sectionStyle}>
        <div style={headingStyle}>Technical Skills</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem" }}>
          {[
            { label: "Languages", value: "Python, SQL, Java, HTML/CSS, JS" },
            { label: "BI & Viz", value: "Power BI, Tableau, Excel" },
            { label: "Databases", value: "MySQL, MS SQL Server" },
            { label: "Tools", value: "OpenCV, YOLOv11, Jupyter, Git" },
          ].map((s) => (
            <div key={s.label}>
              <span style={{ color: "oklch(0.78 0.15 75)", fontWeight: 600, fontSize: "0.8rem" }}>{s.label}: </span>
              <span style={bodyStyle}>{s.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div>
        <div style={headingStyle}>Education</div>
        {[
          { title: "B.E. Computer Science", org: "K. J. College of Engineering", period: "2021–2025", note: "CGPA: 8.31" },
          { title: "HSC (XII)", org: "R. R. Shinde Jr. College", period: "2019–2021", note: "87.67%" },
          { title: "SSC (X)", org: "Sadhana Vidyalaya", period: "2013–2019", note: "84.40%" },
        ].map((e) => (
          <div key={e.title} style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
            <div>
              <div style={h3Style}>{e.title}</div>
              <div style={{ color: "oklch(0.55 0.01 260)", fontSize: "0.8rem" }}>{e.org}</div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ color: "oklch(0.72 0.12 200)", fontSize: "0.8rem" }}>{e.period}</div>
              <div style={{ color: "oklch(0.78 0.15 75)", fontSize: "0.8rem", fontWeight: 600 }}>{e.note}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
