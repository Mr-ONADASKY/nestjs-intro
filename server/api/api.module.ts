import { Module } from '@nestjs/common';
import { ApiController } from './api.controller';
import { TestController } from './test.controller';

// import { ProductsModule } from './products/product.module';

@Module({
  imports: [],
  controllers: [TestController, ApiController],
  providers: [],
})
export class ApiModule {}
