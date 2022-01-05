import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

import { Core } from 'crm-core';

@Injectable()
export class ProfileService {
  private readonly profileModel;
  private readonly userModel;
  constructor(@InjectConnection() private connection: Connection) {
    this.profileModel = this.connection.model('Profile');
    this.userModel = this.connection.model('User');
  }

  /**
   * Создаем профиль простого пользователя
   * @param data
   */
  async createProfileEmpty(data: Profiles.Params.EmptyData) {
    const profile = new this.profileModel({
      owner: data.owner,
      email: data.email,
    });
    await profile.save();
    return Core.ResponseDataAsync('Create profile', profile);
  }

  /**
   * Create
   * @param persona
   */
  async createProfilePersona(persona: Profiles.Params.CreatePersona) {
    const profile = new this.profileModel({ ...persona, type: 'user' });
    await profile.save();
    return Core.ResponseDataAsync('Create persona', profile);
  }

  async createProfileDoctor(doctor: Profiles.Params.CreatePersona) {
    const profile = new this.profileModel({ ...doctor, type: 'doctor' });
    console.log(profile);
    return Core.ResponseDataAsync('Create doctor', profile);
  }

  async getMeData(data: { id: string }) {
    let result;
    const profile = await this.profileModel.findOne({ _id: data.id });
    try {
      result = {
        statusCode: HttpStatus.OK,
        message: 'Congratulations! You has been refresh token',
        data: profile,
      };
    } catch (e) {
      result = {
        statusCode: e.status,
        message: e.message,
        errors: e.error,
      };
    }

    return Core.ResponseDataAsync('My profile', profile);
  }

  async uploadAvatar(file: string) {}

  async getProfile(persona: { owner: string }) {
    const profile = await this.profileModel.findOne({ owner: persona.owner });
    return profile;
  }
}
