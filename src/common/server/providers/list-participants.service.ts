import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/database.service';

@Injectable()
export class listParticipantsService {
  constructor(private readonly database: PrismaService) {}
  async listParticipants() {
    return await this.database.participant.findMany();
  }
}
