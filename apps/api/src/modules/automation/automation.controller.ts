import { Controller, Get } from '@nestjs/common';

@Controller('automations')
export class AutomationController {
  @Get('templates')
  templates() {
    return [
      'daily-winning-products-suggestion',
      'margin-drop-alert',
      'viral-product-detected',
      'stock-scale-recommendation',
      'weekly-exec-report'
    ];
  }
}
