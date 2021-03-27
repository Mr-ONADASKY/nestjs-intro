import { ProductsModule } from './products/product.module';
import { Module } from '@nestjs/common';
import Next from 'next';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RenderModule } from 'nest-next';

@Module({
  imports: [
    RenderModule.forRootAsync(
      Next({
        dev: process.env.NODE_ENV !== 'production',
      }),
    ),
    ProductsModule,
    MongooseModule.forRoot(
      'mongodb://mongodb:mongodb@localhost:27017/nestjs-demo?serverSelectionTimeoutMS=5000&connectTimeoutMS=10000&authSource=admin&authMechanism=SCRAM-SHA-1',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
