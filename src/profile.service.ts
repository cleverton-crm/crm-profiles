import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

@Injectable()
export class ProfileService {
  private readonly profileModel;
  private readonly userModel;
  constructor(@InjectConnection() private connection: Connection) {
    this.profileModel = this.connection.model('Profile');
    this.userModel = this.connection.model('User');
  }

  async createProfile(data: Profile.CreateData) {
    const test = await this.userModel.find();

    console.log(test);
    return {
      statusCode: HttpStatus.OK,
      message: 'TEST',
    };
  }
}
