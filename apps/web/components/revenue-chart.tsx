'use client';

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
  { month: 'Jan', revenue: 120000 },
  { month: 'Fev', revenue: 138000 },
  { month: 'Mar', revenue: 149500 },
  { month: 'Abr', revenue: 172000 },
  { month: 'Mai', revenue: 190200 }
];

export function RevenueChart() {
  return (
    <div className="h-72 w-full rounded-xl bg-card p-4">
      <p className="mb-4 text-sm text-gray-300">Previsão de Receita (cenário realista)</p>
      <ResponsiveContainer>
        <LineChart data={data}>
          <XAxis dataKey="month" stroke="#9CA3AF" />
          <YAxis stroke="#9CA3AF" />
          <Tooltip />
          <Line type="monotone" dataKey="revenue" stroke="#10B981" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
