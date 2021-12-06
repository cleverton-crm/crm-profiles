import { Controller, Get } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @MessagePattern('profile:create')
  async createProfile() {}
}
