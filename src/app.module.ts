import { Module } from '@nestjs/common';
import { PaymentsModule } from './payments/payments.module';


@Module({
  imports: [PaymentsModule],

})
export class AppModule {}
