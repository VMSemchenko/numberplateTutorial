import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { ImageService } from './image.service';

@Injectable()
export class ImageCron {

    constructor(
        private imageService: ImageService
    ) { }

    @Cron(CronExpression.EVERY_30_SECONDS)
    handleCron() {
        console.log('Called when the current second is 30');
        this.imageService.parseImages();
    }
}