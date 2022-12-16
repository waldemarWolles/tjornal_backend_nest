import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! 777';
  }
  getUser(id: number): string {
    return `Hello User ${id} !`;
  }
}
