import { Controller, Get, Req } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { Core } from 'crm-core';

@Controller()
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  /**
   * Создаем
   * @param profileData
   * @param req
   */
  @MessagePattern('profile:new')
  async createProfile(
    @Payload() profileData: Core.Profiles.Update,
  ): Promise<any> {
    return await this.profileService.createProfile(profileData);
  }

  @MessagePattern('profile:get:id')
  async createPersona(@Payload() persona: { owner: string }): Promise<any> {
    return await this.profileService.getProfile(persona);
  }

  @MessagePattern('profile:me')
  async findMe(@Payload() data: { id: string }): Promise<any> {
    return await this.profileService.getMeData(data);
  }

  @MessagePattern('profile:update')
  async updateMe(@Payload() data: { id: string }): Promise<any> {
    return await this.profileService.updateMeData(data);
  }
}
