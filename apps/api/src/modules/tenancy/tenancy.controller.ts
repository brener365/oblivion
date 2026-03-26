import { Controller, Get, Headers } from '@nestjs/common';

@Controller('tenancy')
export class TenancyController {
  @Get('context')
  context(@Headers('x-tenant-id') tenantId = 'demo-store') {
    return {
      tenantId,
      isolation: 'row-level + app-guard',
      plan: 'growth'
    };
  }
}
