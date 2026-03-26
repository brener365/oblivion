import { Controller, Get } from '@nestjs/common';

@Controller('notifications')
export class NotificationsController {
  @Get('feed')
  feed() {
    return [
      { type: 'critical', message: 'Margem do SKU LED-BTL-001 caiu 9% nas últimas 24h.' },
      { type: 'opportunity', message: 'Novo produto viral detectado no nicho pet accessories.' }
    ];
  }
}
