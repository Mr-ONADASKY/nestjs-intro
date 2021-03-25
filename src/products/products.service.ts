import { Product } from './product.model';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Document, Model, Types } from 'mongoose';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('Product')
    private readonly productModel: Model<Product & Document>,
  ) {}

  async insertProduct(title: string, desc: string, price: number) {
    const newProduct = new this.productModel({
      title,
      description: desc,
      price,
    });

    const result = await await newProduct.save();

    return result.id;
  }

  async getProducts() {
    const products = await this.productModel.find().exec();

    return products.map((prod) => ({
      id: prod.id,
      title: prod.title,
      description: prod.description,
    }));
  }

  async getSingleProduct(productId: string) {
    const product = await this.findProduct(productId);

    return {
      id: product.id,
      title: product.title,
      description: product.description,
      price: product.price,
    };
  }

  async updateProduct(
    productId: string,
    title: string,
    desc: string,
    price: number,
  ) {
    const updatedProduct = await this.findProduct(productId);

    if (title) {
      updatedProduct.title = title;
    }

    if (desc) {
      updatedProduct.description = desc;
    }

    if (price) {
      updatedProduct.price = price;
    }

    await updatedProduct.save();
  }

  private async findProduct(productId: string) {
    if (!Types.ObjectId.isValid(productId)) {
      throw new BadRequestException('Invalid objectId');
    }

    const product = await this.productModel.findById(productId);

    if (!product) {
      throw new NotFoundException('Could not find product');
    }

    return product;
  }

  async deleteProduct(productId: string) {
    const product = await this.findProduct(productId);

    await product.delete();
  }
}
