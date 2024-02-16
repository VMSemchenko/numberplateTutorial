import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Log extends Document {
    @Prop({ required: true, type: String })
    numberplate: string;

    @Prop({ required: true, type: Number })
    timestamp: number;
}

export const LogSchema = SchemaFactory.createForClass(Log);
