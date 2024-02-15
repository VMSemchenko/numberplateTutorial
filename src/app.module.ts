import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ImageModule } from './image/image.module';
import { Image } from './image/image.entity';
import { ScheduleModule } from '@nestjs/schedule';


@Module({
  imports: [
    ScheduleModule.forRoot(),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({

        type: 'postgres',
        host: 'ec2-34-241-82-91.eu-west-1.compute.amazonaws.com',
        url: 'postgres://zuxpizlbhausfx:45e473ac61cd712d8b6ecfd43bb7a6b8b7f403703c5bb08116e0ef28b041e7ae@ec2-34-242-120-113.eu-west-1.compute.amazonaws.com:5432/d1rlst43s4llr0',
        port: 5432,
        password: '5df4c61bfd44cc487638b5b68f51f906aa0b1996946a468687103ff2abb7444a',
        username: 'zuxpizlbhausfx',
        entities: [Image],
        database: 'd1rlst43s4llr0',
        ssl: {
          rejectUnauthorized: false,
        },
        synchronize: true
      }
      )
    }),
    ImageModule,
  ],
})


export class AppModule { }