import { ProductsService } from './products.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Post()
  async addProduct(
    @Body('title') prodTitle: string,
    @Body('description') prodDesc: string,
    @Body('price') prodPrice: number,
  ) {
    const prodId = await this.productsService.insertProduct(
      prodTitle,
      prodDesc,
      prodPrice,
    );

    return { id: prodId };
  }

  @Get()
  async getAllProducts() {
    return this.productsService.getProducts();
  }

  @Get(':id')
  async getProduct(@Param('id') id: string) {
    return this.productsService.getSingleProduct(id);
  }

  @Patch(':id')
  async updateProduct(
    @Param('id') productId: string,
    @Body('title') prodTitle: string,
    @Body('description') prodDescription: string,
    @Body('price') prodPrice: number,
  ) {
    await this.productsService.updateProduct(
      productId,
      prodTitle,
      prodDescription,
      prodPrice,
    );
  }

  @Delete(':id')
  async deleteProduct(@Param('id') productId: string) {
    await this.productsService.deleteProduct(productId);
  }
}
