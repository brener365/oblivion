import { Body, Controller, Post } from '@nestjs/common';
import { IsNumber, Max, Min } from 'class-validator';
import { AiService } from './ai.service';

class ViralInputDto {
  @IsNumber()
  @Min(0)
  @Max(100)
  engagement!: number;

  @IsNumber()
  @Min(0)
  @Max(100)
  growth!: number;

  @IsNumber()
  @Min(0)
  @Max(100)
  competitors!: number;

  @IsNumber()
  @Min(0)
  @Max(100)
  margin!: number;
}

@Controller('ai')
export class AiController {
  constructor(private readonly aiService: AiService) {}

  @Post('viral-score')
  getViralScore(@Body() dto: ViralInputDto) {
    return this.aiService.calculateScores(dto);
  }
}
