import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, model } from 'mongoose';

export type ProfileDocument = Profile & Document;

@Schema({
  collation: { locale: 'ru_RU', strength: 1, caseLevel: true },
  timestamps: true,
})
export class Profile extends Document {
  @Prop({ type: String, default: 'profile' })
  type: string;
}

export const ProfileSchema = SchemaFactory.createForClass(Profile);
