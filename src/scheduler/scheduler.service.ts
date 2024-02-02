import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class SchedulerService {

    @Cron(CronExpression.EVERY_5_SECONDS)
    handleCron() {
        console.log('HELLO');
    }
}