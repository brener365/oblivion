import './globals.css';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'COMMERCE OS AI',
  description: 'Enterprise SaaS para inteligência de e-commerce com IA'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
