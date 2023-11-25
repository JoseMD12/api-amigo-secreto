import { Body, Controller, Post } from '@nestjs/common';
import { UpdateSuggestionService } from '../providers/update-suggestion.service';
import { Suggestion } from '../../dtos/suggestion.dto';

@Controller('/participant')
export class UpdateSuggestionController {
  constructor(private readonly service: UpdateSuggestionService) {}

  @Post('/suggestion')
  async updateSuggestion(@Body() body: Suggestion) {
    const result = await this.service.updateSuggestion(body);
    return result;
  }
}
