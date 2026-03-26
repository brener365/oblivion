import { Controller, Get } from '@nestjs/common';

@Controller('health')
export class HealthController {
  @Get()
  check() {
    return {
      service: 'commerce-os-ai-api',
      status: 'ok',
      timestamp: new Date().toISOString()
    };
  }
}
