import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import { Core } from 'crm-core';
import { Profile } from './schemas/profile.schema';

@Injectable()
export class ProfileService {
  private readonly profileModel;
  private readonly userModel;

  constructor(@InjectConnection() private readonly connection: Connection) {
    this.profileModel = this.connection.model('Profile');
    this.userModel = this.connection.model('User');
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

  /**
   * Персональные данные пользователя (Профиль)
   * @param data
   */
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

  async getProfile(persona: { owner: string }) {
    const profile = await this.profileModel.findOne({ owner: persona.owner });
    return profile;
  }

  async createProfile(data: Core.Profiles.Update) {
    console.log(data);
    const profile = await this.profileModel
      .findOneAndUpdate({ _id: data.id }, data, { new: true })
      .exec();
    console.log('Profile ', profile);
    return Core.ResponseDataAsync('Добавлены данные', profile, 200);
  }

  async updateMeData(data: Core.Profiles.Update) {
    let profile = {};
    try {
      profile = await this.profileModel
        .findOneAndUpdate({ _id: data.id }, data, { new: true })
        .exec();
    } catch (e) {
      Core.ResponseError(
        'Произошла ошибка. Обратитесь к администратору',
        e.status || 400,
        e.message,
      );
    }

    return Core.ResponseDataAsync('Добавлены данные', profile, 200);
  }
}
