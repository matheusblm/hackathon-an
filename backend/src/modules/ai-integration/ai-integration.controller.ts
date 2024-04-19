import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AiIntegrationService } from './ai-integration.service';
import { CreateAiIntegrationDto } from './dto/create-ai-integration.dto';
import { UpdateAiIntegrationDto } from './dto/update-ai-integration.dto';

@Controller('ai-integration')
export class AiIntegrationController {
  constructor(private readonly aiIntegrationService: AiIntegrationService) {}

  @Post()
  create(@Body() createAiIntegrationDto: CreateAiIntegrationDto) {
    return this.aiIntegrationService.create(createAiIntegrationDto);
  }

  @Get()
  findAll() {
    return this.aiIntegrationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.aiIntegrationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAiIntegrationDto: UpdateAiIntegrationDto) {
    return this.aiIntegrationService.update(+id, updateAiIntegrationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aiIntegrationService.remove(+id);
  }
}
