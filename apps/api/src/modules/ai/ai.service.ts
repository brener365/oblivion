import { Injectable } from '@nestjs/common';

@Injectable()
export class AiService {
  calculateScores(input: { engagement: number; growth: number; competitors: number; margin: number }) {
    const viralScore = Math.min(100, input.engagement * 0.4 + input.growth * 0.4 + input.margin * 0.2);
    const saturationRisk = Math.min(100, input.competitors * 0.7 + (100 - input.growth) * 0.3);

    return {
      viralScore: Number(viralScore.toFixed(1)),
      trendMomentum: Number((input.growth * 0.9 + input.engagement * 0.1).toFixed(1)),
      saturationRisk: Number(saturationRisk.toFixed(1)),
      profitPotential: Number((input.margin * 0.6 + input.growth * 0.4).toFixed(1))
    };
  }
}
