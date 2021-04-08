import { Controller, Get, Query } from '@nestjs/common';

@Controller('/api')
export class TestController {
  @Get('msg')
  async getMessage(@Query('msg') msg: string) {
    return msg || 'Hello world!';
  }
}
