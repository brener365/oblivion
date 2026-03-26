import { PrismaClient, PlanTier, UserRole } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const tenant = await prisma.tenant.upsert({
    where: { slug: 'demo-store' },
    update: {},
    create: {
      name: 'Demo Commerce',
      slug: 'demo-store',
      planTier: PlanTier.GROWTH,
      users: {
        create: {
          email: 'owner@demo.com',
          name: 'Demo Owner',
          passwordHash: 'hashed-password',
          role: UserRole.OWNER
        }
      }
    }
  });

  const supplier = await prisma.supplier.create({
    data: {
      tenantId: tenant.id,
      source: 'Alibaba',
      externalId: 'ALB-98372',
      name: 'Shenzhen Smart Gadgets',
      moq: 100,
      rating: 4.8,
      leadTimeDays: 12,
      certifications: ['CE', 'RoHS'],
      trustScore: 89
    }
  });

  await prisma.product.create({
    data: {
      tenantId: tenant.id,
      supplierId: supplier.id,
      sku: 'LED-BTL-001',
      name: 'Smart LED Bottle',
      category: 'Home & Lifestyle',
      costPrice: 18.5,
      shippingCost: 7.9,
      taxesEstimate: 4.3,
      marketplaceFee: 8.2,
      suggestedSalePrice: 79.9,
      estimatedMargin: 0.52,
      viralScore: 84,
      trendMomentum: 78,
      saturationRisk: 31,
      profitPotential: 88
    }
  });
}

main()
  .then(async () => prisma.$disconnect())
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
