import { Controller, Get } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @MessagePattern('profile:empty')
  async createProfileEmpty(
    @Payload() data: Profiles.Params.EmptyData,
  ): Promise<any> {
    return await this.profileService.createProfileEmpty(data);
  }

  @MessagePattern('profile:persona')
  async createPersona(
    @Payload() persona: Profiles.Params.CreatePersona,
  ): Promise<any> {
    return await this.profileService.createProfilePersona(persona);
  }

  @MessagePattern('profile:doctor')
  async createDoctor(
    @Payload() doctor: Profiles.Params.CreatePersona,
  ): Promise<any> {
    return await this.profileService.createProfileDoctor(doctor);
  }
}
