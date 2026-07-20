// Obsidian Intelligence — Project detail page with dashboard charts
import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import {
  AreaChart, Area, BarChart, Bar, LineChart, Line,
  PieChart, Pie, Cell, FunnelChart, Funnel, LabelList,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ResponsiveContainer
} from "recharts";
import { projects } from "@/data/projects";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

// ─── Chart data per project ───────────────────────────────────────────────────
const chartData: Record<string, React.ReactNode> = {
  "retail-sales-dashboard": <RetailSalesCharts />,
  "customer-churn-analytics": <ChurnCharts />,
  "ecommerce-funnel-analysis": <FunnelCharts />,
  "supply-chain-kpi-tracker": <SupplyChainCharts />,
  "hr-attrition-analysis": <HRAttritionCharts />,
};

// ─── Color helpers ────────────────────────────────────────────────────────────
const COLORS = {
  amber: "oklch(0.78 0.15 75)",
  cyan: "oklch(0.72 0.12 200)",
  emerald: "oklch(0.72 0.14 155)",
  violet: "oklch(0.65 0.18 290)",
  rose: "oklch(0.65 0.20 25)",
};
const colorMap: Record<string, string> = {
  amber: COLORS.amber, cyan: COLORS.cyan, emerald: COLORS.emerald,
  violet: COLORS.violet, rose: COLORS.rose,
};

const tooltipStyle = {
  backgroundColor: "oklch(0.14 0.014 260)",
  border: "1px solid oklch(0.25 0.015 260)",
  borderRadius: "8px",
  color: "oklch(0.92 0.005 60)",
  fontFamily: "'Space Grotesk', sans-serif",
  fontSize: "12px",
};

// ─── Retail Sales Charts ──────────────────────────────────────────────────────
function RetailSalesCharts() {
  const monthly = [
    { month: "Jan", revenue: 42000, target: 40000 },
    { month: "Feb", revenue: 38000, target: 40000 },
    { month: "Mar", revenue: 51000, target: 45000 },
    { month: "Apr", revenue: 47000, target: 45000 },
    { month: "May", revenue: 63000, target: 55000 },
    { month: "Jun", revenue: 58000, target: 55000 },
    { month: "Jul", revenue: 71000, target: 65000 },
    { month: "Aug", revenue: 69000, target: 65000 },
    { month: "Sep", revenue: 82000, target: 75000 },
    { month: "Oct", revenue: 78000, target: 75000 },
    { month: "Nov", revenue: 95000, target: 85000 },
    { month: "Dec", revenue: 110000, target: 90000 },
  ];
  const regions = [
    { region: "North", sales: 285000, margin: 18.2 },
    { region: "South", sales: 312000, margin: 21.5 },
    { region: "East", sales: 198000, margin: 15.8 },
    { region: "West", sales: 267000, margin: 19.1 },
    { region: "Central", sales: 143000, margin: 12.4 },
    { region: "NE", sales: 89000, margin: 14.7 },
  ];
  const categories = [
    { name: "Electronics", value: 34 },
    { name: "Apparel", value: 22 },
    { name: "Home & Garden", value: 18 },
    { name: "Sports", value: 14 },
    { name: "Books", value: 7 },
    { name: "Other", value: 5 },
  ];
  const PIE_COLORS = [COLORS.amber, COLORS.cyan, COLORS.emerald, COLORS.violet, COLORS.rose, "#888"];

  return (
    <div className="grid gap-6">
      <ChartCard title="Monthly Revenue vs Target" subtitle="Full-year performance tracking">
        <ResponsiveContainer width="100%" height={260}>
          <AreaChart data={monthly}>
            <defs>
              <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={COLORS.amber} stopOpacity={0.3} />
                <stop offset="95%" stopColor={COLORS.amber} stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.22 0.015 260)" />
            <XAxis dataKey="month" tick={{ fill: "oklch(0.55 0.01 260)", fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: "oklch(0.55 0.01 260)", fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${v / 1000}k`} />
            <Tooltip contentStyle={tooltipStyle} formatter={(v: number) => [`$${v.toLocaleString()}`, ""]} />
            <Legend wrapperStyle={{ color: "oklch(0.65 0.01 260)", fontSize: 12 }} />
            <Area type="monotone" dataKey="revenue" name="Revenue" stroke={COLORS.amber} fill="url(#revGrad)" strokeWidth={2} />
            <Line type="monotone" dataKey="target" name="Target" stroke={COLORS.cyan} strokeWidth={1.5} strokeDasharray="4 4" dot={false} />
          </AreaChart>
        </ResponsiveContainer>
      </ChartCard>

      <div className="grid md:grid-cols-2 gap-6">
        <ChartCard title="Sales by Region" subtitle="Revenue contribution per region">
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={regions} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.22 0.015 260)" horizontal={false} />
              <XAxis type="number" tick={{ fill: "oklch(0.55 0.01 260)", fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${v / 1000}k`} />
              <YAxis type="category" dataKey="region" tick={{ fill: "oklch(0.55 0.01 260)", fontSize: 11 }} axisLine={false} tickLine={false} width={55} />
              <Tooltip contentStyle={tooltipStyle} formatter={(v: number) => [`$${v.toLocaleString()}`, "Sales"]} />
              <Bar dataKey="sales" fill={COLORS.amber} radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Category Revenue Share" subtitle="Top-performing product categories">
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie data={categories} cx="50%" cy="50%" innerRadius={55} outerRadius={85} dataKey="value" paddingAngle={3}>
                {categories.map((_, i) => <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />)}
              </Pie>
              <Tooltip contentStyle={tooltipStyle} formatter={(v: number) => [`${v}%`, ""]} />
              <Legend wrapperStyle={{ color: "oklch(0.65 0.01 260)", fontSize: 11 }} />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>
    </div>
  );
}

// ─── Churn Charts ─────────────────────────────────────────────────────────────
function ChurnCharts() {
  const churnByTenure = [
    { tenure: "0–6m", churn: 42, retained: 58 },
    { tenure: "6–12m", churn: 31, retained: 69 },
    { tenure: "1–2y", churn: 22, retained: 78 },
    { tenure: "2–3y", churn: 15, retained: 85 },
    { tenure: "3–5y", churn: 9, retained: 91 },
    { tenure: "5y+", churn: 5, retained: 95 },
  ];
  const churnFactors = [
    { factor: "Contract Type", impact: 88 },
    { factor: "Monthly Charges", impact: 74 },
    { factor: "Tenure", impact: 68 },
    { factor: "Tech Support", impact: 55 },
    { factor: "Internet Service", impact: 49 },
    { factor: "Online Security", impact: 41 },
  ];
  const segments = [
    { name: "High Risk", value: 26.5 },
    { name: "Medium Risk", value: 31.2 },
    { name: "Low Risk", value: 42.3 },
  ];
  const SEG_COLORS = [COLORS.rose, COLORS.amber, COLORS.emerald];

  return (
    <div className="grid gap-6">
      <ChartCard title="Churn Rate by Customer Tenure" subtitle="Retention improves significantly after 12 months">
        <ResponsiveContainer width="100%" height={260}>
          <BarChart data={churnByTenure}>
            <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.22 0.015 260)" />
            <XAxis dataKey="tenure" tick={{ fill: "oklch(0.55 0.01 260)", fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: "oklch(0.55 0.01 260)", fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={(v) => `${v}%`} />
            <Tooltip contentStyle={tooltipStyle} formatter={(v: number) => [`${v}%`, ""]} />
            <Legend wrapperStyle={{ color: "oklch(0.65 0.01 260)", fontSize: 12 }} />
            <Bar dataKey="churn" name="Churn %" fill={COLORS.rose} radius={[4, 4, 0, 0]} />
            <Bar dataKey="retained" name="Retained %" fill={COLORS.cyan} radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      <div className="grid md:grid-cols-2 gap-6">
        <ChartCard title="Top Churn Predictors" subtitle="Feature importance from EDA">
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={churnFactors} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.22 0.015 260)" horizontal={false} />
              <XAxis type="number" tick={{ fill: "oklch(0.55 0.01 260)", fontSize: 11 }} axisLine={false} tickLine={false} domain={[0, 100]} />
              <YAxis type="category" dataKey="factor" tick={{ fill: "oklch(0.55 0.01 260)", fontSize: 10 }} axisLine={false} tickLine={false} width={90} />
              <Tooltip contentStyle={tooltipStyle} formatter={(v: number) => [`${v}/100`, "Impact Score"]} />
              <Bar dataKey="impact" fill={COLORS.cyan} radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Customer Risk Segments" subtitle="Churn risk distribution across customer base">
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie data={segments} cx="50%" cy="50%" outerRadius={80} dataKey="value" label={({ name, value }) => `${name}: ${value}%`} labelLine={false}>
                {segments.map((_, i) => <Cell key={i} fill={SEG_COLORS[i]} />)}
              </Pie>
              <Tooltip contentStyle={tooltipStyle} formatter={(v: number) => [`${v}%`, ""]} />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>
    </div>
  );
}

// ─── Funnel Charts ────────────────────────────────────────────────────────────
function FunnelCharts() {
  const funnelData = [
    { name: "Visits", value: 100000, fill: COLORS.amber },
    { name: "Browse", value: 68000, fill: COLORS.cyan },
    { name: "Add to Cart", value: 31000, fill: COLORS.emerald },
    { name: "Checkout", value: 18000, fill: COLORS.violet },
    { name: "Purchase", value: 11800, fill: COLORS.rose },
  ];
  const cohortData = [
    { week: "W1", d1: 100, d7: 62, d14: 48, d30: 35 },
    { week: "W2", d1: 100, d7: 58, d14: 44, d30: 31 },
    { week: "W3", d1: 100, d7: 65, d14: 51, d30: 38 },
    { week: "W4", d1: 100, d7: 61, d14: 47, d30: 34 },
    { week: "W5", d1: 100, d7: 70, d14: 55, d30: 42 },
    { week: "W6", d1: 100, d7: 68, d14: 53, d30: 40 },
  ];
  const dropOff = [
    { stage: "Visit→Browse", rate: 32 },
    { stage: "Browse→Cart", rate: 54.4 },
    { stage: "Cart→Checkout", rate: 41.9 },
    { stage: "Checkout→Buy", rate: 34.4 },
  ];

  return (
    <div className="grid gap-6">
      <div className="grid md:grid-cols-2 gap-6">
        <ChartCard title="Conversion Funnel" subtitle="User journey from visit to purchase">
          <ResponsiveContainer width="100%" height={260}>
            <FunnelChart>
              <Tooltip contentStyle={tooltipStyle} formatter={(v: number) => [v.toLocaleString(), "Users"]} />
              <Funnel dataKey="value" data={funnelData} isAnimationActive>
                <LabelList position="right" fill="oklch(0.75 0.01 260)" stroke="none" dataKey="name" style={{ fontSize: 11 }} />
              </Funnel>
            </FunnelChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Drop-off Rate by Stage" subtitle="Where users abandon the journey">
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={dropOff}>
              <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.22 0.015 260)" />
              <XAxis dataKey="stage" tick={{ fill: "oklch(0.55 0.01 260)", fontSize: 10 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: "oklch(0.55 0.01 260)", fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={(v) => `${v}%`} />
              <Tooltip contentStyle={tooltipStyle} formatter={(v: number) => [`${v}%`, "Drop-off"]} />
              <Bar dataKey="rate" fill={COLORS.rose} radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      <ChartCard title="30-Day Cohort Retention" subtitle="User retention across 6 weekly cohorts">
        <ResponsiveContainer width="100%" height={220}>
          <LineChart data={cohortData}>
            <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.22 0.015 260)" />
            <XAxis dataKey="week" tick={{ fill: "oklch(0.55 0.01 260)", fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: "oklch(0.55 0.01 260)", fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={(v) => `${v}%`} />
            <Tooltip contentStyle={tooltipStyle} formatter={(v: number) => [`${v}%`, ""]} />
            <Legend wrapperStyle={{ color: "oklch(0.65 0.01 260)", fontSize: 12 }} />
            <Line type="monotone" dataKey="d1" name="Day 1" stroke={COLORS.amber} strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="d7" name="Day 7" stroke={COLORS.cyan} strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="d14" name="Day 14" stroke={COLORS.emerald} strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="d30" name="Day 30" stroke={COLORS.violet} strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </ChartCard>
    </div>
  );
}

// ─── Supply Chain Charts ──────────────────────────────────────────────────────
function SupplyChainCharts() {
  const deliveryData = [
    { month: "Jan", onTime: 87, delayed: 13 },
    { month: "Feb", onTime: 82, delayed: 18 },
    { month: "Mar", onTime: 91, delayed: 9 },
    { month: "Apr", onTime: 89, delayed: 11 },
    { month: "May", onTime: 94, delayed: 6 },
    { month: "Jun", onTime: 92, delayed: 8 },
  ];
  const inventory = [
    { category: "Electronics", turnover: 8.2, stockout: 3 },
    { category: "Apparel", turnover: 12.5, stockout: 7 },
    { category: "Home", turnover: 6.8, stockout: 2 },
    { category: "Sports", turnover: 9.1, stockout: 4 },
    { category: "Books", turnover: 4.3, stockout: 1 },
  ];
  const supplierKPIs = [
    { supplier: "Supplier A", reliability: 96, quality: 94, cost: 88 },
    { supplier: "Supplier B", reliability: 88, quality: 91, cost: 95 },
    { supplier: "Supplier C", reliability: 92, quality: 87, cost: 82 },
    { supplier: "Supplier D", reliability: 79, quality: 85, cost: 91 },
  ];

  return (
    <div className="grid gap-6">
      <ChartCard title="On-Time Delivery Rate (6 Months)" subtitle="Monthly delivery performance tracking">
        <ResponsiveContainer width="100%" height={240}>
          <BarChart data={deliveryData}>
            <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.22 0.015 260)" />
            <XAxis dataKey="month" tick={{ fill: "oklch(0.55 0.01 260)", fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: "oklch(0.55 0.01 260)", fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={(v) => `${v}%`} />
            <Tooltip contentStyle={tooltipStyle} formatter={(v: number) => [`${v}%`, ""]} />
            <Legend wrapperStyle={{ color: "oklch(0.65 0.01 260)", fontSize: 12 }} />
            <Bar dataKey="onTime" name="On-Time %" stackId="a" fill={COLORS.violet} radius={[0, 0, 0, 0]} />
            <Bar dataKey="delayed" name="Delayed %" stackId="a" fill={COLORS.rose} radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      <div className="grid md:grid-cols-2 gap-6">
        <ChartCard title="Inventory Turnover by Category" subtitle="Higher turnover = better stock efficiency">
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={inventory}>
              <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.22 0.015 260)" />
              <XAxis dataKey="category" tick={{ fill: "oklch(0.55 0.01 260)", fontSize: 10 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: "oklch(0.55 0.01 260)", fontSize: 11 }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={tooltipStyle} />
              <Bar dataKey="turnover" name="Turnover Ratio" fill={COLORS.violet} radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Supplier Scorecard" subtitle="Reliability, quality, and cost performance">
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={supplierKPIs}>
              <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.22 0.015 260)" />
              <XAxis dataKey="supplier" tick={{ fill: "oklch(0.55 0.01 260)", fontSize: 10 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: "oklch(0.55 0.01 260)", fontSize: 11 }} axisLine={false} tickLine={false} domain={[70, 100]} />
              <Tooltip contentStyle={tooltipStyle} formatter={(v: number) => [`${v}%`, ""]} />
              <Legend wrapperStyle={{ color: "oklch(0.65 0.01 260)", fontSize: 11 }} />
              <Bar dataKey="reliability" name="Reliability" fill={COLORS.violet} radius={[2, 2, 0, 0]} />
              <Bar dataKey="quality" name="Quality" fill={COLORS.cyan} radius={[2, 2, 0, 0]} />
              <Bar dataKey="cost" name="Cost Score" fill={COLORS.amber} radius={[2, 2, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>
    </div>
  );
}

// ─── HR Attrition Charts ──────────────────────────────────────────────────────
function HRAttritionCharts() {
  const deptData = [
    { dept: "Sales", attrition: 20.6, headcount: 446 },
    { dept: "R&D", attrition: 13.8, headcount: 961 },
    { dept: "HR", attrition: 19.0, headcount: 63 },
  ];
  const tenureAttrition = [
    { tenure: "0–1y", rate: 31.2 },
    { tenure: "1–2y", rate: 18.5 },
    { tenure: "2–5y", rate: 14.1 },
    { tenure: "5–10y", rate: 10.3 },
    { tenure: "10y+", rate: 7.8 },
  ];
  const salaryAttrition = [
    { band: "< $3k", attrition: 26.3, retained: 73.7 },
    { band: "$3–5k", attrition: 19.8, retained: 80.2 },
    { band: "$5–8k", attrition: 11.2, retained: 88.8 },
    { band: "$8–12k", attrition: 7.4, retained: 92.6 },
    { band: "> $12k", attrition: 4.1, retained: 95.9 },
  ];
  const predictors = [
    { factor: "Overtime", score: 91 },
    { factor: "Job Satisfaction", score: 82 },
    { factor: "Salary Band", score: 76 },
    { factor: "Work-Life Balance", score: 68 },
    { factor: "Job Level", score: 61 },
    { factor: "Years at Company", score: 55 },
  ];

  return (
    <div className="grid gap-6">
      <div className="grid md:grid-cols-2 gap-6">
        <ChartCard title="Attrition by Salary Band" subtitle="Higher salary = lower attrition">
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={salaryAttrition}>
              <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.22 0.015 260)" />
              <XAxis dataKey="band" tick={{ fill: "oklch(0.55 0.01 260)", fontSize: 10 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: "oklch(0.55 0.01 260)", fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={(v) => `${v}%`} />
              <Tooltip contentStyle={tooltipStyle} formatter={(v: number) => [`${v}%`, ""]} />
              <Legend wrapperStyle={{ color: "oklch(0.65 0.01 260)", fontSize: 12 }} />
              <Bar dataKey="attrition" name="Attrition %" fill={COLORS.rose} radius={[4, 4, 0, 0]} />
              <Bar dataKey="retained" name="Retained %" fill={COLORS.emerald} radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Attrition by Tenure" subtitle="New employees are most at risk">
          <ResponsiveContainer width="100%" height={240}>
            <AreaChart data={tenureAttrition}>
              <defs>
                <linearGradient id="hrGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={COLORS.rose} stopOpacity={0.3} />
                  <stop offset="95%" stopColor={COLORS.rose} stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.22 0.015 260)" />
              <XAxis dataKey="tenure" tick={{ fill: "oklch(0.55 0.01 260)", fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: "oklch(0.55 0.01 260)", fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={(v) => `${v}%`} />
              <Tooltip contentStyle={tooltipStyle} formatter={(v: number) => [`${v}%`, "Attrition Rate"]} />
              <Area type="monotone" dataKey="rate" stroke={COLORS.rose} fill="url(#hrGrad)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      <ChartCard title="Top Attrition Predictors" subtitle="Key factors driving voluntary turnover">
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={predictors} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.22 0.015 260)" horizontal={false} />
            <XAxis type="number" tick={{ fill: "oklch(0.55 0.01 260)", fontSize: 11 }} axisLine={false} tickLine={false} domain={[0, 100]} />
            <YAxis type="category" dataKey="factor" tick={{ fill: "oklch(0.55 0.01 260)", fontSize: 11 }} axisLine={false} tickLine={false} width={110} />
            <Tooltip contentStyle={tooltipStyle} formatter={(v: number) => [`${v}/100`, "Predictor Score"]} />
            <Bar dataKey="score" fill={COLORS.rose} radius={[0, 4, 4, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>
    </div>
  );
}

// ─── Reusable chart card ──────────────────────────────────────────────────────
function ChartCard({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) {
  return (
    <div
      className="p-5 rounded-xl"
      style={{ background: "oklch(0.14 0.014 260)", border: "1px solid oklch(0.22 0.015 260)" }}
    >
      <div className="mb-4">
        <h3
          className="text-sm font-semibold"
          style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.92 0.005 60)" }}
        >
          {title}
        </h3>
        <p className="text-xs mt-0.5" style={{ color: "oklch(0.50 0.01 260)" }}>
          {subtitle}
        </p>
      </div>
      {children}
    </div>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────
export default function ProjectDetail() {
  const params = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === params.id);

  // Insight-led project subtitles
  const insightTitles: Record<string, string> = {
    "retail-sales-dashboard": "Revenue Patterns Across 6 Regions",
    "customer-churn-analytics": "The Signals Behind 26.5% Customer Churn",
    "ecommerce-funnel-analysis": "Where 88% of Visitors Stop Converting",
    "supply-chain-kpi-tracker": "Operational Efficiency: 15 Suppliers, 18 KPIs",
    "hr-attrition-analysis": "Signals Behind Workforce Churn",
  };

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "oklch(0.10 0.012 260)" }}>
        <div className="text-center">
          <div className="text-4xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.78 0.15 75)" }}>
            404
          </div>
          <p style={{ color: "oklch(0.55 0.01 260)" }}>Project not found</p>
          <Link href="/" className="mt-4 inline-block" style={{ color: "oklch(0.78 0.15 75)" }}>
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  const accentColor = colorMap[project.color] || COLORS.amber;
  const amberColor = COLORS.amber;

  return (
    <div className="min-h-screen" style={{ background: "oklch(0.10 0.012 260)" }}>
      <Navbar />

      {/* Hero */}
      <section
        className="pt-24 pb-12 relative overflow-hidden"
        style={{ background: "oklch(0.10 0.012 260)" }}
      >
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `radial-gradient(ellipse at 70% 50%, ${accentColor}10 0%, transparent 60%)`,
          }}
        />
        <div className="absolute inset-0 z-0 dot-grid opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Back */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm mb-8 transition-colors"
              style={{ color: "oklch(0.55 0.01 260)", textDecoration: "none" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = accentColor)}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "oklch(0.55 0.01 260)")}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 5l-7 7 7 7" />
              </svg>
              Back to Portfolio
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Left: Project info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <span
                  className="inline-block text-xs px-2.5 py-1 rounded-full font-medium mb-4"
                  style={{
                    background: `${accentColor}15`,
                    color: accentColor,
                    border: `1px solid ${accentColor}30`,
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  {project.category}
                </span>
                <h1
                  className="text-3xl sm:text-4xl font-bold mb-3 leading-tight"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.92 0.005 60)" }}
                >
                  {project.title}
                </h1>
                {insightTitles[project.id] && (
                  <p className="text-base font-medium mb-2 italic" style={{ color: amberColor, fontFamily: "'Space Grotesk', sans-serif" }}>
                    "{insightTitles[project.id]}"
                  </p>
                )}
                <p className="text-base mb-6 leading-relaxed" style={{ color: "oklch(0.60 0.01 260)" }}>
                  {project.description}
                </p>

                {/* Highlights */}
                <div
                  className="p-5 rounded-xl mb-6"
                  style={{ background: "oklch(0.14 0.014 260)", border: "1px solid oklch(0.22 0.015 260)" }}
                >
                  <h3
                    className="text-sm font-semibold mb-3"
                    style={{ fontFamily: "'Space Grotesk', sans-serif", color: accentColor }}
                  >
                    Key Highlights
                  </h3>
                  <ul className="space-y-2">
                    {project.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm" style={{ color: "oklch(0.65 0.01 260)" }}>
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: accentColor }} />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium"
                      style={{
                        background: "oklch(0.16 0.015 260)",
                        color: "oklch(0.70 0.01 260)",
                        border: "1px solid oklch(0.24 0.015 260)",
                        fontFamily: "'JetBrains Mono', monospace",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right: Metrics */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-3"
            >
              {project.metrics.map((m) => (
                <div
                  key={m.label}
                  className="p-4 rounded-xl text-center"
                  style={{
                    background: "oklch(0.14 0.014 260)",
                    border: `1px solid oklch(0.78 0.15 75 / 0.25)`,
                  }}
                >
                  <div
                    className="text-2xl font-bold mb-1"
                    style={{ fontFamily: "'Space Grotesk', sans-serif", color: amberColor }}
                  >
                    {m.value}
                  </div>
                  <div className="text-xs" style={{ color: "oklch(0.50 0.01 260)" }}>
                    {m.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dashboard */}
      <section className="py-12" style={{ background: "oklch(0.10 0.012 260)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div
                className="w-1 h-6 rounded-full"
                style={{ background: amberColor }}
              />
              <h2
                className="text-xl font-bold"
                style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.92 0.005 60)" }}
              >
                Analytics Dashboard
              </h2>
              <span
                className="text-xs px-2 py-0.5 rounded"
                style={{
                  background: `oklch(0.78 0.15 75 / 0.15)`,
                  color: amberColor,
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                Interactive Charts
              </span>
            </div>
            {chartData[project.id]}
          </motion.div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}
