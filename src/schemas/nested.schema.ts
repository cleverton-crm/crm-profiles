import { Prop, Schema } from '@nestjs/mongoose';
import { Core } from 'crm-core';

/** Nested Schemas ProfilesRequisites */
@Schema({ timestamps: false, _id: false, versionKey: false })
export class ProfilesRequisites implements Core.Profiles.Requisites {
  @Prop({ type: String, default: null })
  bank: string;
  @Prop({ type: String, default: null })
  bik: string;
  @Prop({ type: String, default: null })
  card: string;
  @Prop({ type: String, default: null })
  correspondent: string;
  @Prop({ type: String, default: null })
  inn: string;
  @Prop({ type: String, default: null })
  innBank: string;
  @Prop({ type: String, default: null })
  payment: string;
  @Prop({ type: String, default: null })
  snils: string;
}
/** Nested Schemas ProfilesAddress */
@Schema({ timestamps: false, _id: false, versionKey: false })
export class ProfilesAddress implements Core.Profiles.Address {
  @Prop({ type: String, default: null })
  state?: string;
  @Prop({ type: String, default: null })
  country?: string;
  @Prop({ type: String, default: null })
  region?: string;
  @Prop({ type: String, default: null })
  city?: string;
  @Prop({ type: String, default: null })
  street?: string;
  @Prop({ type: String, default: null })
  zip?: string;
  @Prop({ type: String, default: null })
  timezone?: string;
}

/** Nested Schemas ProfilesPassport */
@Schema({ timestamps: false, _id: false, versionKey: false })
export class ProfilesPassport implements Core.Profiles.Passport {
  @Prop({ type: Date, default: null })
  dateOfIssue: Date;
  @Prop({ type: String, default: null })
  number: string;
  @Prop({ type: String, default: null })
  series: string;
}
/** Nested Schemas ProfilesDriverLicense */
@Schema({ timestamps: false, _id: false, versionKey: false })
export class ProfilesDriverLicense implements Core.Profiles.DriverLicense {
  @Prop({ type: Date, default: null })
  dateOfIssue: Date;
  @Prop({ type: Date, default: null })
  endDate: Date;
  @Prop({ type: String, default: null })
  number: string;
}

/** Nested Schemas PersonalDocument */
@Schema({ timestamps: false, _id: false, versionKey: false })
export class PersonalDocument implements Core.Profiles.PersonalDocument {
  @Prop({ type: () => ProfilesDriverLicense, default: {} })
  driver_license: ProfilesDriverLicense;
  @Prop({ type: () => ProfilesPassport, default: {} })
  passport: ProfilesPassport;
}
