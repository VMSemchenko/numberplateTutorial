import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
// import { ImageService } from '.e';

@Injectable()
export class ImageCron {

    // constructor(
    //     private imageService: ImageService
    // ) { }

    @Cron(CronExpression.EVERY_5_SECONDS)
    handleCron() {
        console.log('HELLO, I AM SCHEDULER SERVICE');
        // this.imageService.parseImages();
    }
}