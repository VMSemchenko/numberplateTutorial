import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Log } from './log.model';

@Injectable()
export class LogService {
  constructor(@InjectModel(Log.name) private readonly logModel: Model<Log>) { }

  async createLogs(logsData: { numberplate: string, timestamp: number }[]): Promise<Log[]> {
    const result = await this.logModel.insertMany(logsData);
    return result;
  }


  async findLogByParams({ numberplate, from, to }: { numberplate: string, from?: string, to?: string }): Promise<any[]> {

    const query: { numberplate: string, timestamp?: { $gte?: number, $lte?: number } } = { numberplate };
    // If 'from' is provided (as a Date), add it to the query to filter timestamps greater than or equal to 'from'
    if (from) {
      query.timestamp = { $gte: new Date(from).getTime() };
    }

    if (to) {
      query.timestamp = { $lte: new Date(to).getTime() };
    }
    const result = await this.logModel.find().exec();
    const parsedResult = result.map(({ numberplate, timestamp }) => {
      const time = new Date(timestamp).toISOString();
      return ({ numberplate, time });
    });
    return parsedResult;
  }
}

