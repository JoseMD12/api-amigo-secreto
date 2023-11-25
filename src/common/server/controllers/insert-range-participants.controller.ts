import { Body, Controller, Post } from '@nestjs/common';
import { InsertRangeParticipantsService } from '../providers/insert-range-participants.service';
import { Participant } from '../../dtos/participants.dto';

@Controller('/participant')
export class InsertRangeParticipantsController {
  constructor(private readonly service: InsertRangeParticipantsService) {}

  @Post('/insert-range')
  async insertRange(@Body() body: Participant[]) {
    const result = await this.service.insertRange(body);
    return result;
  }
}
