import { NestFactory } from '@nestjs/core';
import { ProfileModule } from './profile.module';
import { TcpOptions, Transport } from '@nestjs/microservices';
import { cyan } from 'cli-color';
import { Logger } from '@nestjs/common';

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
  logger.log(cyan(`Profile microservice started on TCP port: ${PORT}`));
  await app.listen();
}
bootstrap();
