type KpiCardProps = {
  label: string;
  value: string;
  delta: string;
};

export function KpiCard({ label, value, delta }: KpiCardProps) {
  return (
    <div className="rounded-xl bg-card p-4 shadow-lg">
      <p className="text-sm text-gray-400">{label}</p>
      <p className="mt-2 text-2xl font-semibold">{value}</p>
      <p className="mt-1 text-xs text-emerald-400">{delta}</p>
    </div>
  );
}
