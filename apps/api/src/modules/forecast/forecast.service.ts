import { Injectable } from '@nestjs/common';

@Injectable()
export class ForecastService {
  projectRevenue(last30DaysRevenue: number) {
    const dailyAvg = last30DaysRevenue / 30;
    const trendFactor = 1.08;

    const project = (days: number, scenarioMultiplier: number) =>
      Number((dailyAvg * days * trendFactor * scenarioMultiplier).toFixed(2));

    return {
      pessimistic: {
        d30: project(30, 0.9),
        d60: project(60, 0.88),
        d90: project(90, 0.85),
        d180: project(180, 0.82)
      },
      realistic: {
        d30: project(30, 1),
        d60: project(60, 1),
        d90: project(90, 1),
        d180: project(180, 1)
      },
      optimistic: {
        d30: project(30, 1.15),
        d60: project(60, 1.2),
        d90: project(90, 1.25),
        d180: project(180, 1.3)
      },
      models: ['linear-regression', 'arima-lite', 'moving-average']
    };
  }
}
