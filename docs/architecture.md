# COMMERCE OS AI · Arquitetura Empresarial

## Visão em Camadas

- **Frontend (Next.js 14)**: dashboard executivo, cockpit de produtos, copiloto IA.
- **API Core (NestJS + DDD)**: orquestra casos de uso, RBAC, tenancy, billing.
- **Microserviços especializados**:
  - Search Service
  - AI Engine
  - Analytics Service
  - Forecast Service
  - Scraper Service
  - Notification Service
- **Dados**:
  - PostgreSQL (fonte transacional)
  - Redis (cache + BullMQ)
  - ElasticSearch (busca e ranking)

## Fluxos críticos

1. Scraper Service coleta fornecedores globais e publica eventos em fila.
2. Search Service normaliza, deduplica e indexa produtos no ElasticSearch.
3. AI Engine calcula Viral Score, Saturation Risk, Profit Potential.
4. Analytics Service consolida vendas por integração (Shopify, Shopee, Mercado Livre).
5. Forecast Service calcula cenários 30/60/90/180.
6. Notification Service dispara alertas e relatórios.

## Multi-tenant

- Isolamento por `tenantId` em todas as entidades.
- Pronto para Row Level Security no PostgreSQL.
- Guardas de aplicação para impedir cross-tenant leakage.

## Segurança

- RBAC por papel (OWNER, ADMIN, ANALYST, OPERATOR)
- Auditoria por ação/entidade
- Rate limiting (a ser habilitado via guard no gateway)
- Criptografia de segredos em nível de infraestrutura
