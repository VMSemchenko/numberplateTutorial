import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Log, LogSchema } from './log.model';
import { LogService } from './log.service';
import { LogController } from './log.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Log.name, schema: LogSchema }])
  ],
  providers: [LogService],
  exports: [MongooseModule, LogService],
  controllers: [LogController]
})
export class LogModule { }
