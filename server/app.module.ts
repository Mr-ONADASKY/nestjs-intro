import { ViewModule } from './view/view.module';
import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiModule } from './api/api.module';

@Module({
  imports: [
    // RenderModule.forRootAsync(
    //   Next({
    //     dev: process.env.NODE_ENV !== 'production',
    //   }),
    // ),
    // AppModule,
    ApiModule,
    // MongooseModule.forRoot(
    //   'mongodb://mongodb:mongodb@localhost:27017/nestjs-demo?serverSelectionTimeoutMS=5000&connectTimeoutMS=10000&authSource=admin&authMechanism=SCRAM-SHA-1',
    // ),
    ViewModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
