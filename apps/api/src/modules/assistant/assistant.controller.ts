import { Body, Controller, Post } from '@nestjs/common';
import { IsString, MinLength } from 'class-validator';

class AssistantQuestionDto {
  @IsString()
  @MinLength(4)
  question!: string;
}

@Controller('assistant')
export class AssistantController {
  @Post('ask')
  ask(@Body() dto: AssistantQuestionDto) {
    return {
      question: dto.question,
      answer:
        'Com base no seu histórico, escale o Smart LED Bottle com budget incremental de 15% e alvo de margem mínima de 48%.',
      confidence: 0.81,
      evidence: ['trend-momentum', 'supplier-trust', 'current-margin']
    };
  }
}
