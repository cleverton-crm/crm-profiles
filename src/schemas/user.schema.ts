import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, model, PaginateModel } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

@Schema({
  collation: { locale: 'ru', strength: 1, caseLevel: true },
  timestamps: true,
})
export class Users extends Document {
  @Prop({ type: String, default: uuidv4 })
  _id: string; // UUID v4

  @Prop({ type: String, default: '' })
  permissions: string;
}

export const UserSchema = SchemaFactory.createForClass(Users);
export type UserModel<T extends Document> = PaginateModel<T>;
export const UserModel: UserModel<Users> = model<Users>(
  'User',
  UserSchema,
) as UserModel<Users>;
