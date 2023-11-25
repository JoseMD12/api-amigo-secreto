import { Controller, Get, Param } from '@nestjs/common';
import { DrawnParticipantService } from '../providers/drawn-participant.service';

@Controller('/participant')
export class DrawnParticipantController {
  constructor(private readonly service: DrawnParticipantService) {}

  @Get('/drawn/:name')
  async insertRange(@Param('name') name: string) {
    const result = await this.service.drawn(name);
    return result;
  }
}
