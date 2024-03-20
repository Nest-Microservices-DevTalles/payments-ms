import { Controller, Get } from '@nestjs/common';

@Controller('/')
export class HealthCheckController {

  @Get()
  healthCheck() {
    return 'Payments Webhook is up and running!!';
  }

}
