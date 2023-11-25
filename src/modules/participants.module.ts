import { Module } from '@nestjs/common';
import { InsertRangeParticipantsController } from '../common/server/controllers/insert-range-participants.controller';
import { InsertRangeParticipantsService } from '../common/server/providers/insert-range-participants.service';
import { ListParticipantsController } from '../common/server/controllers/list-participants.controller';
import { listParticipantsService } from '../common/server/providers/list-participants.service';
import { PrismaModule } from './database.module';
import { DrawnParticipantController } from '../common/server/controllers/drawn-participant.controller';
import { DrawnParticipantService } from '../common/server/providers/drawn-participant.service';
import { UpdateSuggestionController } from '../common/server/controllers/update-suggestions.controller';
import { UpdateSuggestionService } from '../common/server/providers/update-suggestion.service';

@Module({
  imports: [PrismaModule],
  controllers: [
    InsertRangeParticipantsController,
    ListParticipantsController,
    DrawnParticipantController,
    UpdateSuggestionController,
  ],
  providers: [
    InsertRangeParticipantsService,
    listParticipantsService,
    DrawnParticipantService,
    UpdateSuggestionService,
  ],
})
export class ParticipantModule {}
