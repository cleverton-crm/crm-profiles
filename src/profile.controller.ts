import { Controller, Get } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @MessagePattern('profile:new')
  async createProfileEmpty(
    @Payload() data: Profiles.Params.EmptyData,
  ): Promise<any> {
    return await this.profileService.createProfileEmpty(data);
  }

  @MessagePattern('profile:get:id')
  async createPersona(@Payload() persona: { owner: string }): Promise<any> {
    console.log(persona);
    return await this.profileService.getProfile(persona);
  }

  @MessagePattern('profile:me')
  async findMe(@Payload() data: { id: string }): Promise<any> {
    console.log('ProControler', data);
    return await this.profileService.getMeData(data);
  }
}
