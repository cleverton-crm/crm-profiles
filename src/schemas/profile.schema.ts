import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export type ProfileDocument = Profile & Document;

@Schema({
  collation: { locale: 'ru', strength: 1, caseLevel: true },
  timestamps: true,
  _id: false,
})
export class Profile extends Document implements Profiles.PersonaSchema {
  @Prop({ type: uuidv4, default: uuidv4() })
  _id: string;

  @Prop({ type: uuidv4, required: true, unique: true, index: true })
  owner: string;

  @Prop({ type: String, default: 'persona' })
  type: string;

  @Prop({ type: String, default: 'profile' })
  object: 'profile';

  @Prop({ type: String, default: 'active' })
  status: string;

  @Prop({ type: String, default: null })
  about: string | null;

  @Prop({ type: String, default: null })
  title: string | null;

  @Prop({ type: Map, default: {} })
  address: Map<string, any>;

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
  maidenName: string | null;

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

  /** Doctor Types */
  @Prop({ type: Map })
  skills: Map<string, any>;

  @Prop({ type: Map })
  worksExperience: Map<string, any>;

  @Prop({ type: String })
  worksTitle: string;

  @Prop({ type: Map })
  certificates: Map<string, any>;

  @Prop({ type: Map })
  experience: Map<string, any>;

  @Prop({ type: Map })
  calendar: Map<string, any>;

  @Prop({ type: Map })
  specialty: Map<string, any>;

  @Prop({ type: Map })
  disorders: Map<string, any>;
  /**
   * Visitor Profile
   */
  @Prop({ type: uuidv4 })
  cards: string;
}

export const ProfileSchema = SchemaFactory.createForClass(Profile);
