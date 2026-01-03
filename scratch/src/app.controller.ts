import { Controller, Get } from "@nestjs/common";

// controller dengan route handler
@Controller('/app')
export class AppController {
  @Get('/asdf')
  getRoot() {
    return 'Hi there'
  }

  @Get('/bye')
  getBye() {
    return 'Hi bye'
  }
}