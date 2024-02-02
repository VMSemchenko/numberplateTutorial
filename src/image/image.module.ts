import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImageService } from './image.service';
import { SchedulerService } from '../scheduler/scheduler.service';
import { ImageController } from './image.controller';
import { Image } from './image.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Image])],
    providers: [ImageService],
    controllers: [ImageController],
    exports: [ImageService]
})

export class ImageModule { }