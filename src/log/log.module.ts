import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Log, LogSchema } from './log.model';
import { LogService } from './log.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Log.name, schema: LogSchema }])
  ],
  providers: [LogService],
  exports: [MongooseModule, LogService]
})
export class LogModule { }
