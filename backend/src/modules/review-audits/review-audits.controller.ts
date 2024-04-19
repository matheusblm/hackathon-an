import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ReviewAuditsService } from './review-audits.service';

@Controller('review-audits')
export class ReviewAuditsController {
  constructor(private readonly reviewAuditsService: ReviewAuditsService) {}

  @Post()
  create(@Body() createReviewAuditDto: any) {
    return this.reviewAuditsService.create(createReviewAuditDto);
  }

  @Get()
  findAll() {
    return this.reviewAuditsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reviewAuditsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReviewAuditDto: any) {
    return this.reviewAuditsService.update(+id, updateReviewAuditDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reviewAuditsService.remove(+id);
  }
}
