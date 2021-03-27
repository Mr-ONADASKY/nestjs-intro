import { Module } from '@nestjs/common';
import { ApiController } from './api.controller';

// import { ProductsModule } from './products/product.module';

@Module({
  imports: [],
  controllers: [ApiController],
  providers: [],
})
export class ApiModule {}
