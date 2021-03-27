import { ViewModule } from './server/view/view.module';
import { Module } from '@nestjs/common';

import { AppController } from './server/app.controller';
import { AppService } from './server/app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ApiModule } from './server/api/api.module';

@Module({
  imports: [
    // RenderModule.forRootAsync(
    //   Next({
    //     dev: process.env.NODE_ENV !== 'production',
    //   }),
    // ),
    // AppModule,
    ApiModule,
    MongooseModule.forRoot(
      'mongodb://mongodb:mongodb@localhost:27017/nestjs-demo?serverSelectionTimeoutMS=5000&connectTimeoutMS=10000&authSource=admin&authMechanism=SCRAM-SHA-1',
    ),
    ViewModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
