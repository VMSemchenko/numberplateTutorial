import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Log } from './log.model';

@Injectable()
export class LogsService {
  constructor(@InjectModel(Log.name) private readonly logModel: Model<Log>) { }

  async createLog(numberplate: string, timestamp: number): Promise<Log> {
    const createdLog = new this.logModel({ numberplate, timestamp });
    return createdLog.save();
  }

  async findAllLogs(): Promise<Log[]> {
    return this.logModel.find().exec();
  }

  async findLogById(id: string): Promise<Log> {
    return this.logModel.findById(id).exec();
  }
}
