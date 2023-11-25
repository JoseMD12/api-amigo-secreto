import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/database.service';
import { Participant } from '../../dtos/participants';

@Injectable()
export class InsertRangeParticipantsService {
  constructor(private database: PrismaService) {}
  async insertRange(body: Participant[]) {
    const result = await this.database.participant.createMany({
      data: body,
    });

    return result;
  }
}
