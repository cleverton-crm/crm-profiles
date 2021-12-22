import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

import { Core } from 'micro-core';


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

    return Core.ResponseDataAsync('Create profile', profile);
  }

  /**
   * Create
   * @param persona
   */
  async createProfilePersona(persona: Profiles.Params.CreatePersona) {
    const profile = new this.profileModel({ ...persona, type: 'persona' });

    return Core.ResponseDataAsync('Create persona', profile);
  }

  async createProfileDoctor(doctor: Profiles.Params.CreatePersona) {
    const profile = new this.profileModel({ ...doctor, type: 'doctor' });
    console.log(profile);
    return Core.ResponseDataAsync('Create doctor', profile);
  }

  async createUpdateDoctor(doctor: Profiles.Params.CreatePersona) {
    const profile = new this.profileModel({ ...doctor, type: 'doctor' });
    console.log(profile);
    return profile;
  }

  async uploadAvatar(file: string) {}
}
