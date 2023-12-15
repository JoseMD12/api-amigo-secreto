import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/database.service';

@Injectable()
export class DrawnParticipantService {
  constructor(private readonly database: PrismaService) {}

  async drawn(participantName: string) {
    const participant = await this.database.participant.findFirst({
      where: {
        name: participantName,
      },
    });

    if (!participant) {
      throw new Error('Participant not found');
    }

    if (participant.personDrawn) {
      return participant.personDrawn;
    }

    const allParticipants = await this.database.participant.findMany({
      where: {
        name: {
          not: participantName,
        },
        familyLeader: {
          not: participant.familyLeader,
        },
        wasDrawn: false,
      },
    });

    const drawnIndex = Math.floor(Math.random() * allParticipants.length);
    const drawnParticipant = allParticipants[drawnIndex];

    participant.personDrawn = drawnParticipant.name;
    await this.database.participant.update({
      where: {
        id: participant.id,
      },
      data: {
        personDrawn: drawnParticipant.name,
      },
    });

    drawnParticipant.wasDrawn = true;
    await this.database.participant.update({
      where: {
        id: drawnParticipant.id,
      },
      data: {
        wasDrawn: true,
      },
    });

    console.log('participant', participant);
    console.log('drawnParticipant', drawnParticipant);

    return drawnParticipant;
  }
}
