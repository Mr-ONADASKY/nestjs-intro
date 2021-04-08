import { Controller, Get, NotFoundException } from '@nestjs/common';

@Controller('/api')
export class ApiController {
  @Get('*')
  catchAll() {
    throw new NotFoundException();
  }

  @Get()
  catchApi() {
    throw new NotFoundException();
  }
}
