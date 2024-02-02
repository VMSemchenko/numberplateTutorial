import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SchedulerService } from './scheduler.service';
import { ImageService } from 'src/image/image.service';
import { ImageModule } from 'src/image/image.module';

@Module({
    imports: [ImageModule],
    providers: [SchedulerService],
    exports: [SchedulerService]
})

export class SchedulerModule { }