import { ProfileListSchema, ProfileSchema } from '../schemas/profile.schema';

export const ProfileProvider = {
  name: 'Profile',
  useFactory: () => {
    ProfileSchema.set('toJSON', { virtuals: true });
    ProfileSchema.set('toObject', { virtuals: true });

    return ProfileSchema;
  },
};

export const ProfileListProvider = {
  name: 'ProfileList',
  useFactory: () => {
    ProfileListSchema.set('toJSON', { virtuals: true });
    ProfileListSchema.set('toObject', { virtuals: true });

    return ProfileListSchema;
  },
};
