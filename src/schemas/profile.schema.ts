import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, model, Types } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export type ProfileDocument = Profile & Document;

@Schema({
  collation: { locale: 'ru', strength: 1, caseLevel: true },
  timestamps: true,
  _id: false,
})
export class Profile extends Document {
  @Prop({ type: uuidv4, default: uuidv4() })
  _id: string;

  @Prop({ type: String, default: 'profile' })
  type: string;
}

export const ProfileSchema = SchemaFactory.createForClass(Profile);
