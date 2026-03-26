import { Body, Controller, Post } from '@nestjs/common';
import { IsNumber, Min } from 'class-validator';
import { ForecastService } from './forecast.service';

class ForecastInputDto {
  @IsNumber()
  @Min(0)
  last30DaysRevenue!: number;
}

@Controller('forecast')
export class ForecastController {
  constructor(private readonly forecastService: ForecastService) {}

  @Post('revenue')
  forecastRevenue(@Body() dto: ForecastInputDto) {
    return this.forecastService.projectRevenue(dto.last30DaysRevenue);
  }
}
