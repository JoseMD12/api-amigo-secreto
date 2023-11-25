import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/database.service';
import { Suggestion } from '../../dtos/suggestion.dto';

@Injectable()
export class UpdateSuggestionService {
  constructor(private readonly database: PrismaService) {}

  async updateSuggestion(body: Suggestion) {
    const participant = await this.database.participant.findFirst({
      where: {
        name: body.name,
      },
    });

    if (!participant) {
      throw new Error('Participant not found');
    }

    const updated = await this.database.participant.update({
      where: {
        id: participant.id,
      },
      data: {
        ...body,
      },
    });

    return updated;
  }
}
