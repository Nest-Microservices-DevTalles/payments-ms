import { Module } from '@nestjs/common';
import { PaymentsModule } from './payments/payments.module';
import { HealthCheckModule } from './health-check/health-check.module';


@Module({
  imports: [PaymentsModule, HealthCheckModule],

})
export class AppModule {}
