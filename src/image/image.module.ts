import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImageService } from './image.service';
import { ImageController } from './image.controller';
import { ImageCron } from './image.cron';
import { Image } from './image.entity';
import { LogService } from 'src/log/log.service';
import { LogModule } from 'src/log/log.module';

@Module({
    imports: [TypeOrmModule.forFeature([Image]), LogModule],
    providers: [ImageService, ImageCron, LogService],
    controllers: [ImageController],
    exports: [ImageService]
})

export class ImageModule { }