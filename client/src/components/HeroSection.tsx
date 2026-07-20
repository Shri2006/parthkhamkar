// Obsidian Intelligence — Animated hero section
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ROLES = [
  "Data Analyst",
  "BI Developer",
  "Python Engineer",
  "SQL Specialist",
  "Dashboard Builder",
];

export default function HeroSection() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setRoleIdx((i) => (i + 1) % ROLES.length);
        setVisible(true);
      }, 400);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    document.querySelector("#resume")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: "oklch(0.10 0.012 260)",
      }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/manus-storage/hero-bg_c9bb4354.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center right",
          opacity: 0.35,
        }}
      />
      {/* Dot grid overlay */}
      <div className="absolute inset-0 z-0 dot-grid opacity-40" />
      {/* Amber glow orb */}
      <div
        className="absolute z-0 rounded-full"
        style={{
          width: "600px",
          height: "600px",
          top: "50%",
          right: "-100px",
          transform: "translateY(-50%)",
          background: "radial-gradient(circle, oklch(0.78 0.15 75 / 0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      {/* Left gradient fade */}
      <div
        className="absolute inset-y-0 left-0 z-0 w-1/2"
        style={{
          background: "linear-gradient(to right, oklch(0.10 0.012 260) 40%, transparent)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 pt-32">
        <div className="max-w-2xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-6"
            style={{
              background: "oklch(0.78 0.15 75 / 0.12)",
              border: "1px solid oklch(0.78 0.15 75 / 0.3)",
              color: "oklch(0.78 0.15 75)",
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: "oklch(0.78 0.15 75)" }}
            />
            Available for opportunities
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-2"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              color: "oklch(0.92 0.005 60)",
            }}
          >
            Parth
            <br />
            <span style={{ color: "oklch(0.78 0.15 75)" }} className="amber-text-glow">
              Khamkar
            </span>
          </motion.h1>

          {/* Animated role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex items-center gap-3 mb-6 h-10"
          >
            <span
              className="text-xl sm:text-2xl font-medium"
              style={{ color: "oklch(0.55 0.01 260)", fontFamily: "'Space Grotesk', sans-serif" }}
            >
              /&gt;
            </span>
            <span
              className="text-xl sm:text-2xl font-semibold transition-all duration-400"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                color: "oklch(0.72 0.12 200)",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(-8px)",
                transition: "opacity 0.35s ease, transform 0.35s ease",
              }}
            >
              {ROLES[roleIdx]}
            </span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="text-base sm:text-lg leading-relaxed mb-10 max-w-lg"
            style={{ color: "oklch(0.60 0.01 260)" }}
          >
            Detail-oriented Computer Engineering graduate transforming raw data into
            decisive insights — through SQL, Python, Power BI, and Tableau.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={scrollToProjects}
              className="px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 active:scale-95"
              style={{
                background: "oklch(0.78 0.15 75)",
                color: "oklch(0.10 0.012 260)",
                fontFamily: "'Space Grotesk', sans-serif",
                boxShadow: "0 0 20px oklch(0.78 0.15 75 / 0.35)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.boxShadow =
                  "0 0 30px oklch(0.78 0.15 75 / 0.55)";
                (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.boxShadow =
                  "0 0 20px oklch(0.78 0.15 75 / 0.35)";
                (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
              }}
            >
              View Projects →
            </button>
            <button
              onClick={scrollToContact}
              className="px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 active:scale-95"
              style={{
                background: "transparent",
                color: "oklch(0.92 0.005 60)",
                border: "1px solid oklch(0.30 0.02 260)",
                fontFamily: "'Space Grotesk', sans-serif",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "oklch(0.78 0.15 75 / 0.5)";
                (e.currentTarget as HTMLButtonElement).style.color = "oklch(0.78 0.15 75)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "oklch(0.30 0.02 260)";
                (e.currentTarget as HTMLButtonElement).style.color = "oklch(0.92 0.005 60)";
              }}
            >
              View Resume
            </button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap gap-8 mt-14"
          >
            {[
              { value: "5+", label: "Projects" },
              { value: "8.31", label: "CGPA" },
              { value: "4+", label: "Tools" },
              { value: "1", label: "Internship" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="text-2xl font-bold"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.78 0.15 75)" }}
                >
                  {stat.value}
                </div>
                <div className="text-xs mt-0.5" style={{ color: "oklch(0.55 0.01 260)" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs" style={{ color: "oklch(0.45 0.01 260)", fontFamily: "'JetBrains Mono', monospace" }}>
          scroll
        </span>
        <div
          className="w-px h-10 animate-pulse"
          style={{ background: "linear-gradient(to bottom, oklch(0.78 0.15 75 / 0.6), transparent)" }}
        />
      </motion.div>
    </section>
  );
}
