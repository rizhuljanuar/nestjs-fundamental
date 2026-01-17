import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

const cookieSession = require('cookie-session');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Setup cookie-session middleware
  app.use(
    cookieSession({
      keys: ['random-string-for-development-only'],
      name: 'session',
      maxAge: 24 * 60 * 60 * 1000 // 24 hours (optional)
    })
  );

  // Setup global validation pipe
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true
  }));

  await app.listen(3000);
}
bootstrap();
