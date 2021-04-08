import { Injectable, OnModuleInit } from '@nestjs/common';
import next from 'next';
import { NextServer } from 'next/dist/server/next';

@Injectable()
export class ViewService implements OnModuleInit {
  private server!: NextServer;

  async onModuleInit(): Promise<void> {
    try {
      this.server =
        process.env.ENVIRONMENT === 'prod'
          ? next({ dir: './dist/client' })
          : next({ dev: true, dir: './client' });
      await this.server.prepare();
    } catch (error) {
      console.log(error);
    }
  }

  getNextServer(): NextServer {
    return this.server;
  }
}
