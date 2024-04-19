import { Module } from '@nestjs/common';
import { AiIntegrationService } from './ai-integration.service';
import { AiIntegrationController } from './ai-integration.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  controllers: [AiIntegrationController],
  imports: [HttpModule],
  providers: [AiIntegrationService],
})
export class AiIntegrationModule {}
