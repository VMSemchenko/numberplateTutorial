import { Controller, Post, Body } from '@nestjs/common';
import { LogService } from './log.service';

@Controller('logs')
export class LogController {
  constructor(private readonly logService: LogService) { }

  @Post('info')
  async getLogInfo(@Body() body: { numberplate: string, to?: string, from?: string }) {
    return this.logService.findLogByParams(body);
  }
}
