import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";


// Boostrap untuk menjalankan aplikasi
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.listen(3000);
}

bootstrap();