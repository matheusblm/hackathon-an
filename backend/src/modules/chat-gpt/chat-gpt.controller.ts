import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { ChatGptService } from './chat-gpt.service';

@Controller('chat-gpt')
export class ChatGptController {
  constructor(private readonly chatGptService: ChatGptService) {}

  @Post('/send-prompt')
  @HttpCode(HttpStatus.OK)
  async sendPrompt(@Body('tags') tags: any): Promise<string> {
    return this.chatGptService.sendPrompt(tags);
  }
}
