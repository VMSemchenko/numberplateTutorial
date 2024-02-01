// import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';

// @Module({
//   imports: [],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}


import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { DataSource } from 'typeorm';

import { ImageModule } from './image/image.module'
import { Image } from './image/image.entity';
// import { TransactionModule } from './transaction/transaction.module'
// import { Transaction } from './transaction/transaction.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'ec2-34-241-82-91.eu-west-1.compute.amazonaws.com',
      // host: process.env.HOST,
      // url: 'postgres://mupzkvpitzcdgh:5df4c61bfd44cc487638b5b68f51f906aa0b1996946a468687103ff2abb7444a@ec2-34-241-82-91.eu-west-1.compute.amazonaws.com:5432/delodbvpc5bl7b',
      url: 'postgres://zuxpizlbhausfx:45e473ac61cd712d8b6ecfd43bb7a6b8b7f403703c5bb08116e0ef28b041e7ae@ec2-34-242-120-113.eu-west-1.compute.amazonaws.com:5432/d1rlst43s4llr0',
      // url: process.env.DATABASE_URL,
      port: 5432,
      // port: +process.env.PORT,
      password: '5df4c61bfd44cc487638b5b68f51f906aa0b1996946a468687103ff2abb7444a',
      // password: process.env.PASSWORD,
      username: 'zuxpizlbhausfx',
      // username: process.env.USERNAME,
      entities: [Image],
      database: 'd1rlst43s4llr0',
      // database: process.env.DATABASE,
      ssl: {
        rejectUnauthorized: false,
      },
      synchronize: true
    }),
    ImageModule,
    // TransactionModule
  ],
})
export class AppModule { }


