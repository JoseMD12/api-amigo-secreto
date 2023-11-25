import { Module } from '@nestjs/common';
import { InsertRangeParticipantsController } from '../common/server/controllers/insert-range-participants.controller';
import { InsertRangeParticipantsService } from '../common/server/providers/insert-range-participants.service';
import { ListParticipantsController } from '../common/server/controllers/list-participants.controller';
import { listParticipantsService } from '../common/server/providers/list-participants.service';
import { PrismaModule } from './database.module';

@Module({
  imports: [PrismaModule],
  controllers: [InsertRangeParticipantsController, ListParticipantsController],
  providers: [InsertRangeParticipantsService, listParticipantsService],
})
export class ParticipantModule {}
