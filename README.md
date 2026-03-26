# COMMERCE OS AI

Plataforma SaaS enterprise para operadores de e-commerce encontrarem produtos vencedores, validarem fornecedores globais, preverem faturamento e automatizarem decisões usando IA.

## Stack

- **Frontend**: Next.js 14 (App Router), TypeScript, Tailwind, Recharts
- **Backend**: NestJS com módulos orientados a domínio
- **Dados**: PostgreSQL + Redis + ElasticSearch
- **Mensageria**: BullMQ (pronto para integração)
- **Infra**: Docker Compose + CI pipeline

## Monorepo

```txt
apps/
  api/       # API REST + base para WebSockets
  web/       # Dashboard executivo (CEO View)
packages/
  database/  # Prisma schema + seed
  shared/    # tipos compartilhados
docs/
  architecture.md
infra/
  docker/
  ci/
```

## Domínios já implementados (base funcional)

- Healthcheck
- Catálogo e simulação de precificação
- AI Engine (viral scoring heurístico)
- Forecast de receita (30/60/90/180)
- Competitor Intelligence Report
- Status de integrações
- Templates de automação
- Assistente IA interno
- Contexto multi-tenant
- Feed de notificações

## API examples

Base URL: `http://localhost:4000/api/v1`

### Health
`GET /health`

### Produtos + pricing
`GET /products`

`POST /products/pricing/simulate`
```json
{
  "costPrice": 18.5,
  "shippingCost": 7.9,
  "taxes": 4.3,
  "marketplaceFee": 8.2,
  "targetMargin": 0.45,
  "currency": "BRL"
}
```

### AI viral score
`POST /ai/viral-score`
```json
{
  "engagement": 92,
  "growth": 81,
  "competitors": 43,
  "margin": 65
}
```

### Forecast
`POST /forecast/revenue`
```json
{
  "last30DaysRevenue": 180000
}
```

### Competitor report
`POST /competitors/intelligence-report`
```json
{ "url": "https://example.com/product/123" }
```

## Banco de dados (Prisma)

Arquivo principal: `packages/database/prisma/schema.prisma`

Inclui modelagem multi-tenant para:

- Tenant / Users / RBAC
- Suppliers / Products
- Sales snapshots
- Alerts / Automation Rules
- Audit logs

## Rodando localmente

```bash
pnpm install
cd infra/docker && docker compose up -d
pnpm --filter @commerce-os-ai/api dev
pnpm --filter @commerce-os-ai/web dev
```

## Seed

```bash
cd packages/database
pnpm db:generate
pnpm db:seed
```

## Roadmap de produção

1. Adicionar autenticação JWT + SSO.
2. Implementar BullMQ workers para scraping distribuído.
3. Conectar Search Service ao ElasticSearch.
4. Substituir heurísticas por modelos treinados (MLflow).
5. Implementar WebSocket gateway para alertas em tempo real.
6. Observabilidade completa (OpenTelemetry + Grafana).
