import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map } from 'rxjs/operators';

@Injectable()
export class ChatGptService {
  constructor(private httpService: HttpService) {}

  async sendPrompt(tags: any): Promise<string> {
    const formattedTags = tags
      .map((tag) => `${tag.name}: ${tag.value}`)
      .join(', ');
    const prompt = `Como um historiador formado preciso gerar uma descrição que ilustre um documento ou foto com as seguintes tags: ${formattedTags}`;

    const apiKey = process.env.OPENAI_API_KEY;
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    };

    const response = await this.httpService
      .post(
        'https://api.openai.com/v1/engines/text-davinci-003/completions',
        {
          prompt: prompt,
          max_tokens: 150,
        },
        { headers },
      )
      .pipe(map((response) => response.data.choices[0].text))
      .toPromise();

    return response;
  }
}
