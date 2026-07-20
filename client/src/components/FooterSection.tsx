// Obsidian Intelligence — Footer
export default function FooterSection() {
  return (
    <footer
      className="py-8 text-center"
      style={{
        background: "oklch(0.08 0.010 260)",
        borderTop: "1px solid oklch(0.18 0.015 260)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div
            className="w-7 h-7 rounded-md flex items-center justify-center text-xs font-bold"
            style={{
              background: "oklch(0.78 0.15 75)",
              color: "oklch(0.10 0.012 260)",
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            PK
          </div>
          <span className="text-sm" style={{ color: "oklch(0.45 0.01 260)", fontFamily: "'Space Grotesk', sans-serif" }}>
            Parth Khamkar · Data Analytics Portfolio
          </span>
        </div>
        <span className="text-xs" style={{ color: "oklch(0.35 0.01 260)", fontFamily: "'JetBrains Mono', monospace" }}>
          © 2025 · Built with React & Recharts
        </span>
      </div>
    </footer>
  );
}

