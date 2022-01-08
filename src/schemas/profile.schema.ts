import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import { Core } from 'crm-core';
import {
  PersonalDocument,
  ProfilesAddress,
  ProfilesRequisites,
} from './nested.schema';

export type ProfileDocument = Profile & Document;

/** Main Schemas Profiles */
@Schema({ timestamps: true })
export class Profile extends Document implements Core.Profiles.Schema {
  @Prop({ type: uuidv4, default: uuidv4() })
  _id: string;

  @Prop({ type: uuidv4, unique: true, index: true })
  owner: string;

  @Prop({ type: String, default: 'member' })
  type: string;

  @Prop({ type: String, default: 'profile' })
  object: string;

  @Prop({ type: String, default: 'active' })
  status: string;

  @Prop({ type: String, default: null })
  about: string | null;

  @Prop({ type: String, default: null })
  title: string | null;

  @Prop({ type: () => ProfilesAddress, default: {} })
  address: ProfilesAddress;

  @Prop({ type: Map, default: {} })
  avatar: Map<string, any>;

  @Prop({ type: Date, default: null })
  birthDate: Date;

  @Prop({ type: String, default: null })
  email: string | null;

  @Prop({ type: String, default: null })
  gender: string;

  @Prop({ type: String, default: null })
  firstName: string | null;

  @Prop({ type: String, default: null })
  lastName: string | null;

  @Prop({ type: String, default: null })
  middleName: string | null;

  @Prop({ type: String, default: null })
  nickName: string | null;

  @Prop({ type: String, default: null })
  relationship: string;

  @Prop({ type: String, default: null })
  language: string | null;

  @Prop({ type: Array, default: [] })
  speakLanguage: string[];

  @Prop({ type: Map })
  socials: Map<string, any>;

  @Prop({ type: String, default: null })
  customer: string;

  @Prop({ type: () => PersonalDocument, default: {} })
  passport: PersonalDocument;

  @Prop({ type: String, default: null })
  phoneNumber: string;

  @Prop({ type: Date, default: null })
  startDate: Date;

  @Prop({ type: () => ProfilesRequisites, default: {} })
  requisites: ProfilesRequisites;
}

export const ProfileSchema = SchemaFactory.createForClass(Profile);
