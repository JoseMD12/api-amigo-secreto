import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/database.service';

@Injectable()
export class listParticipantsService {
  constructor(private readonly database: PrismaService) {}
  async listParticipants() {
    console.log('listParticipantsService');
    return await this.database.participant.findMany();
  }
}
