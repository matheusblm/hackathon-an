import { Module } from '@nestjs/common';
import { ReviewAuditsService } from './review-audits.service';
import { ReviewAuditsController } from './review-audits.controller';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [ReviewAuditsController],
  providers: [ReviewAuditsService, PrismaService],
})
export class ReviewAuditsModule {}
