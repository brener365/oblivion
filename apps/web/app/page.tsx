import { KpiCard } from '@/components/kpi-card';
import { RevenueChart } from '@/components/revenue-chart';

const kpis = [
  { label: 'Lucro Previsto (30d)', value: 'R$ 94.200', delta: '+12.8% vs mês anterior' },
  { label: 'Produtos Campeões', value: '18', delta: '+4 esta semana' },
  { label: 'Fornecedores Confiáveis', value: '41', delta: 'Supplier Trust > 80' },
  { label: 'Oportunidades IA', value: '26', delta: '7 críticas nas últimas 24h' }
];

export default function HomePage() {
  return (
    <main className="mx-auto min-h-screen max-w-7xl space-y-6 p-8">
      <header>
        <h1 className="text-3xl font-bold">COMMERCE OS AI · CEO View</h1>
        <p className="text-sm text-gray-400">Plataforma full stack para produtos vencedores, previsão e automação comercial.</p>
      </header>

      <section className="grid gap-4 md:grid-cols-4">
        {kpis.map((kpi) => (
          <KpiCard key={kpi.label} {...kpi} />
        ))}
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <RevenueChart />
        <div className="rounded-xl bg-card p-4">
          <h2 className="text-lg font-semibold">Alertas Críticos</h2>
          <ul className="mt-3 space-y-2 text-sm text-gray-300">
            <li>⚠ Queda de margem no SKU LED-BTL-001 (-9.1%)</li>
            <li>🔥 Produto viral detectado: Pet Fur Remover Pro</li>
            <li>📦 Reabastecer estoque em 6 dias (prob. ruptura: 74%)</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
