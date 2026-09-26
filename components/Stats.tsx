const STATS = [
  { num: "12+", label: "Years building" },
  { num: "80+", label: "Projects delivered" },
  { num: "7", label: "Services in-house" },
  { num: "100%", label: "Nigerian owned" }
];

export default function Stats() {
  return (
    <div className="max-w-[1180px] mx-auto px-7 grid grid-cols-2 md:grid-cols-4 gap-8 py-14 border-b border-ink/10">
      {STATS.map((s) => (
        <div key={s.label}>
          <div className="font-display font-bold text-3xl text-blueprint">{s.num}</div>
          <div className="text-steel text-sm mt-1">{s.label}</div>
        </div>
      ))}
    </div>
  );
}
