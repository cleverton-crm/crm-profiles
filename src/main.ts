import { NestFactory } from '@nestjs/core';
import { ProfileModule } from './profile.module';
import { TcpOptions, Transport } from '@nestjs/microservices';
import { cyan } from 'cli-color';
import { Logger } from '@nestjs/common';
import { ConfigService } from './config/config.service';

async function bootstrap() {
  const logger = new Logger('ProfileModule');

  const config = new ConfigService();

  const app = await NestFactory.createMicroservice(ProfileModule, {
    transport: Transport.TCP,
    options: {
      host: '0.0.0.0',
      port: config.get('port'),
    },
  } as TcpOptions);

  logger.log(
    cyan(`Profile microservice started on TCP port: ${config.get('port')}`),
  );
  await app.listen();
}
bootstrap();
