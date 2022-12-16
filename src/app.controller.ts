import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/users/:id')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getUser(@Param('id') id: string): string {
    return this.appService.getUser(+id);
  }
}
