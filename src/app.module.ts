import { ProductsModule } from './products/product.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
