import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { ImageService } from '../image/image.service';

@Injectable()
export class SchedulerService {

    constructor(
        private imageService: ImageService
    ) { }

    // private imageService: ImageService


    @Cron(CronExpression.EVERY_5_SECONDS)
    handleCron() {
        console.log('HELLO, I AM SCHEDULER SERVICE');
        this.imageService.parseImages();
    }
}