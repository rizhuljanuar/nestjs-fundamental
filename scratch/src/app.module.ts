import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";

// module yang membungkus controller
@Module({
  controllers: [AppController] // list semua controllers
})

export class AppModule {}