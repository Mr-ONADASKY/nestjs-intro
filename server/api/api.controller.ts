import { Controller, Get, NotFoundException } from '@nestjs/common';
import { ApiExcludeEndpoint, ApiTags } from '@nestjs/swagger';

@Controller('/api')
export class ApiController {
  @ApiExcludeEndpoint()
  @Get('*')
  catchAll() {
    throw new NotFoundException();
  }

  @ApiExcludeEndpoint()
  @Get()
  catchApi() {
    throw new NotFoundException();
  }
}
