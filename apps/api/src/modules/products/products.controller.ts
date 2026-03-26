import { Body, Controller, Get, Post } from '@nestjs/common';
import { IsNumber, IsString, Min } from 'class-validator';
import { ProductsService } from './products.service';

class PricingSimulationDto {
  @IsNumber()
  @Min(0)
  costPrice!: number;

  @IsNumber()
  @Min(0)
  shippingCost!: number;

  @IsNumber()
  @Min(0)
  taxes!: number;

  @IsNumber()
  @Min(0)
  marketplaceFee!: number;

  @IsNumber()
  @Min(0)
  targetMargin!: number;

  @IsString()
  currency!: string;
}

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  listProducts() {
    return this.productsService.findAll();
  }

  @Post('pricing/simulate')
  simulatePricing(@Body() dto: PricingSimulationDto) {
    const totalCost = dto.costPrice + dto.shippingCost + dto.taxes + dto.marketplaceFee;
    const suggestedPrice = totalCost / (1 - dto.targetMargin);
    const breakEvenUnits = Math.ceil(2500 / (suggestedPrice - totalCost));

    return {
      totalCost,
      suggestedPrice: Number(suggestedPrice.toFixed(2)),
      breakEvenUnits,
      roi: Number((((suggestedPrice - totalCost) / totalCost) * 100).toFixed(2)),
      currency: dto.currency
    };
  }
}
