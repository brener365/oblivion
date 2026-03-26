import { Controller, Get } from '@nestjs/common';

@Controller('integrations')
export class IntegrationsController {
  @Get('status')
  getStatus() {
    return {
      shopify: 'connected',
      shopee: 'pending',
      mercadoLivre: 'connected',
      metaAds: 'connected',
      googleAnalytics: 'connected'
    };
  }
}
