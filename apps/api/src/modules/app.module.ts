import { Module } from '@nestjs/common';
import { HealthModule } from './health/health.module';
import { ProductsModule } from './products/products.module';
import { AiModule } from './ai/ai.module';
import { ForecastModule } from './forecast/forecast.module';
import { CompetitorsModule } from './competitors/competitors.module';
import { IntegrationsModule } from './integrations/integrations.module';
import { AutomationModule } from './automation/automation.module';
import { AssistantModule } from './assistant/assistant.module';
import { TenancyModule } from './tenancy/tenancy.module';
import { NotificationsModule } from './notifications/notifications.module';

@Module({
  imports: [
    HealthModule,
    ProductsModule,
    AiModule,
    ForecastModule,
    CompetitorsModule,
    IntegrationsModule,
    AutomationModule,
    AssistantModule,
    TenancyModule,
    NotificationsModule
  ]
})
export class AppModule {}
