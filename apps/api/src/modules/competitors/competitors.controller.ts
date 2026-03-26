import { Body, Controller, Post } from '@nestjs/common';
import { IsUrl } from 'class-validator';

class CompetitorInputDto {
  @IsUrl()
  url!: string;
}

@Controller('competitors')
export class CompetitorsController {
  @Post('intelligence-report')
  buildReport(@Body() dto: CompetitorInputDto) {
    return {
      source: dto.url,
      estimatedMonthlySales: 1240,
      avgRating: 4.5,
      marketAvgPrice: 89.9,
      positioning: 'mid-premium',
      summary: 'Concorrente em crescimento, com preço acima da média e alto volume de avaliações recentes.'
    };
  }
}
