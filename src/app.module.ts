import { Module } from '@nestjs/common';
import { PrismaModule } from './modules/database.module';
import { ParticipantModule } from './modules/participants.module';

@Module({
  imports: [PrismaModule, ParticipantModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
