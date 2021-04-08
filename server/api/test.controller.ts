import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('/api')
export class TestController {
  @ApiTags('Test')
  @Get('msg')
  async getMessage(@Query('msg') msg: string) {
    return msg || 'Hello world!';
  }
}
