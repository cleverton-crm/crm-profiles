import { NestFactory } from '@nestjs/core';
import { ProfileModule } from './profile.module';
import { TcpOptions, Transport } from '@nestjs/microservices';
import { cyan } from 'cli-color';
import { INestApplication, Logger } from '@nestjs/common';
import { ConfigService } from './services';

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


let app: INestApplication;
const logger = new Logger('NestApplication');

async function gracefulShutdown(): Promise<void> {
  if (app !== undefined) {
    await app.close();
    logger.warn('Application closed!');
  }
  process.exit(0);
}

process.once('SIGTERM', async () => {
  logger.error('SIGTERM: Graceful shutdown... ');
  await gracefulShutdown();
});

process.once('SIGINT', async () => {
  logger.error('SIGINT: Graceful shutdown... ');
  await gracefulShutdown();
});