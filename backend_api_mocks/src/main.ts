import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: '*', // 'http://localhost:3011', '*'
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  });

  await app.listen(3020);
}
bootstrap();
