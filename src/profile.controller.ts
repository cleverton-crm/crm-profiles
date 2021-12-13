import { Controller, Get } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @MessagePattern('profile:create')
  async createProfile(@Payload() data: Profile.CreateData): Promise<any> {
    console.log(data);
    return await this.profileService.createProfile(data);
  }
}
