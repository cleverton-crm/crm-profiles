import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, model, PaginateModel } from 'mongoose';

@Schema({
  collation: { locale: 'en_US', strength: 1, caseLevel: true },
  timestamps: true,
})
export class Profile extends Document {
  @Prop({ type: String, default: 'profile' })
  type: string;
}

export const ProfileSchema = SchemaFactory.createForClass(Profile);
export type ProfileModel<T extends Document> = PaginateModel<T>;
export const ProfileModel: ProfileModel<Profile> = model<Profile>(
  'Profile',
  ProfileSchema,
) as ProfileModel<Profile>;
