# Como usar o COMMERCE OS AI (Guia Prático)

Este guia mostra o fluxo diário para um operador de e-commerce usar a plataforma em ambiente local.

## 1) Subir infraestrutura

```bash
cd infra/docker
docker compose up -d
```

Serviços esperados:
- PostgreSQL: `localhost:5432`
- Redis: `localhost:6379`
- ElasticSearch: `localhost:9200`

## 2) Preparar banco de dados

```bash
cd /workspace/oblivion/packages/database
pnpm install
pnpm db:generate
pnpm db:seed
```

> Configure `DATABASE_URL` antes de rodar migrations/seed.

Exemplo:

```bash
export DATABASE_URL="postgresql://commerce:commerce@localhost:5432/commerce_os_ai?schema=public"
```

## 3) Subir API e Dashboard

No diretório raiz do projeto:

```bash
pnpm install
pnpm --filter @commerce-os-ai/api dev
pnpm --filter @commerce-os-ai/web dev
```

- API: `http://localhost:4000/api/v1`
- Web: `http://localhost:3000`

## 4) Fluxo funcional recomendado (dia a dia)

### 4.1 Verificar saúde do backend

```bash
curl http://localhost:4000/api/v1/health
```

### 4.2 Listar produtos candidatos

```bash
curl http://localhost:4000/api/v1/products
```

### 4.3 Simular precificação (margem/ROI/break-even)

```bash
curl -X POST http://localhost:4000/api/v1/products/pricing/simulate \
  -H "Content-Type: application/json" \
  -d '{
    "costPrice": 18.5,
    "shippingCost": 7.9,
    "taxes": 4.3,
    "marketplaceFee": 8.2,
    "targetMargin": 0.45,
    "currency": "BRL"
  }'
```

### 4.4 Calcular Viral Score e risco de saturação

```bash
curl -X POST http://localhost:4000/api/v1/ai/viral-score \
  -H "Content-Type: application/json" \
  -d '{
    "engagement": 92,
    "growth": 81,
    "competitors": 43,
    "margin": 65
  }'
```

### 4.5 Gerar previsão de faturamento

```bash
curl -X POST http://localhost:4000/api/v1/forecast/revenue \
  -H "Content-Type: application/json" \
  -d '{"last30DaysRevenue": 180000}'
```

### 4.6 Analisar concorrente automaticamente

```bash
curl -X POST http://localhost:4000/api/v1/competitors/intelligence-report \
  -H "Content-Type: application/json" \
  -d '{"url":"https://example.com/product/123"}'
```

### 4.7 Consumir feed de alertas

```bash
curl http://localhost:4000/api/v1/notifications/feed
```

### 4.8 Usar copiloto interno

```bash
curl -X POST http://localhost:4000/api/v1/assistant/ask \
  -H "Content-Type: application/json" \
  -d '{"question":"Qual produto devo escalar essa semana?"}'
```

## 5) Multi-tenant no dia a dia

Use o header `x-tenant-id` para simular isolamento por empresa:

```bash
curl http://localhost:4000/api/v1/tenancy/context \
  -H "x-tenant-id: demo-store"
```

## 6) Operação sugerida para times comerciais

1. Rodar ingestão/scraping (próxima etapa com workers BullMQ).
2. Classificar produtos por Viral Score + Supplier Trust Score.
3. Simular preço e selecionar SKUs com melhor margem real.
4. Executar forecast 30/60/90/180 para planejamento de estoque.
5. Revisar alerts críticos e relatório semanal automatizado.

## 7) Checklist de produção (resumo)

- [ ] JWT + RBAC completo por rota
- [ ] WebSocket para alertas em tempo real
- [ ] Workers distribuídos (scraper/ranking)
- [ ] Integrações reais (Shopify/Shopee/Mercado Livre/Meta/GA)
- [ ] Observabilidade (logs, métricas, tracing)
