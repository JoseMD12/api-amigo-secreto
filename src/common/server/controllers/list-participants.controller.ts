import { Controller, Get } from '@nestjs/common';
import { listParticipantsService } from '../providers/list-participants.service';

@Controller('/participant')
export class ListParticipantsController {
  constructor(private readonly service: listParticipantsService) {}
  @Get('/list')
  async listParticipants() {
    return await this.service.listParticipants();
  }
}
