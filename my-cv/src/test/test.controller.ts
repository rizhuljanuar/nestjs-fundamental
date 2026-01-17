import { Body, Controller, Get, Post, Session } from '@nestjs/common';

@Controller('test')
export class TestController {
  @Get('/color')
  getColor(@Session() session: any) {
    return { color: session.color || 'not set' };
  }

  @Post('/color')
  setColor(@Session() session: any, @Body() body: { color: string }) {
    session.color = body.color;
    return { success: true };
  }
}
