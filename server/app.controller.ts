import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Render('home')
  // @Get()
  // public index(@Query('name') name?: string) {
  //   return { name };
  // }

  // @Render('about')
  // @Get('/about')
  // public about() {
  //   return {};
  // }

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }
}
