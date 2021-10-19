import * as jsondiffpatch from 'jsondiffpatch';

import { Body, Controller, Get, Post } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/getDiff')
  getDiff(@Body() data: any): any {
    return jsondiffpatch.diff(data.j1, data.j2);
  }
}
