import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';

import { ProfileProvider, UserProvider } from './providers';
import { ProfileController } from './controllers';
import {
  ConfigService,
  JwtConfigService,
  MongoConfigService,
  ProfileService,
} from './services';

@Module({
  imports: [
    ConfigService,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    JwtModule.registerAsync({
      useClass: JwtConfigService,
    }),

    MongooseModule.forRootAsync({
      useClass: MongoConfigService,
    }),
    MongooseModule.forFeatureAsync([ProfileProvider, UserProvider]),
  ],
  controllers: [ProfileController],
  providers: [ProfileService, ConfigService],
})
export class ProfileModule {}
