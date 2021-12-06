import { NestFactory } from '@nestjs/core';
import { ProfileModule } from './profile.module';

import { Logger } from 'mongodb';
import { TcpOptions, Transport } from '@nestjs/microservices';
import { cyan } from 'cli-color';

async function bootstrap() {
  const logger = new Logger('ProfileModule');
  const PORT = process.env.PROFILE_SERVICE_PORT || 4002;
  const app = await NestFactory.createMicroservice(ProfileModule, {
    transport: Transport.TCP,
    options: {
      host: '0.0.0.0',
      port: PORT,
    },
  } as TcpOptions);

  await app.listen();
}
bootstrap();
