import { Injectable } from '@nestjs/common';
import { map } from 'rxjs';
@Injectable()
export class AiIntegrationService {
  constructor(private httpService: any) {}

  async sendToOpenAI(tags: any): Promise<string> {
    const formattedTags = tags
      .map((tag) => `${tag.name}: ${tag.value}`)
      .join(', ');
    const prompt = `Como um historiador Preciso de uma descrição detalhada das seguintes tags com os seus valores: ${formattedTags}`;

    const url =
      'https://api.openai.com/v1/engines/text-davinci-003/completions';
    const apiKey = process.env.OPENAI_API_KEY;
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    };
    const body = {
      prompt: prompt,
      max_tokens: 150,
    };

    return this.httpService
      .post(url, body, { headers })
      .pipe(map((response: any) => response.data.choices[0].text))
      .toPromise();
  }
}
