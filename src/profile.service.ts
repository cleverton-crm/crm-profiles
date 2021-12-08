import { Injectable } from '@nestjs/common';
import { Core } from 'core-types/global';

@Injectable()
export class ProfileService {
  getHello(): Promise<Core.Response.Success> {
    return;
  }
}
