export type TrendScores = {
  viralScore: number;
  trendMomentum: number;
  saturationRisk: number;
  profitPotential: number;
};

export type SupplierTrustScore = {
  supplierId: string;
  trustScore: number;
  rationale: string[];
};

export type TenantContext = {
  tenantId: string;
  plan: 'starter' | 'growth' | 'scale';
};
