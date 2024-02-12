import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImageService } from './image.service';
import { ImageController } from './image.controller';
import { ImageCron } from './image.cron';
import { Image } from './image.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Image])],
    providers: [ImageService, ImageCron],
    controllers: [ImageController],
    exports: [ImageService]
})

export class ImageModule { }