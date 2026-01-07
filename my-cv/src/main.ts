import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Setup global validation pipe
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true  // ← Akan dijelaskan video selanjutnya
  }));

  await app.listen(3000);
}
bootstrap();
