import { Controller, Get, Res, Req } from '@nestjs/common';
import { ApiExcludeEndpoint } from '@nestjs/swagger';
import { Request, Response } from 'express';

import { ViewService } from './view.service';

@Controller('/')
export class ViewController {
  constructor(private viewService: ViewService) {}

  @ApiExcludeEndpoint()
  @Get('*')
  static(@Req() req: Request, @Res() res: Response) {
    const handle = this.viewService.getNextServer().getRequestHandler();
    handle(req, res);
  }
}
