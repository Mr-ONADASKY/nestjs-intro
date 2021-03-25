import { Product } from './product.model';
import { Injectable, NotFoundException } from '@nestjs/common';
import { nanoid } from 'nanoid';

@Injectable()
export class ProductsService {
  products: Product[] = [];

  insertProduct(title: string, desc: string, price: number) {
    const prodId = nanoid();
    const newProduct = new Product(prodId, title, desc, price);

    this.products.push(newProduct);
    return prodId;
  }

  getProducts() {
    return this.products.slice();
  }

  getProduct(productId: string) {
    const product = this.findProduct(productId)[0];

    return { ...product };
  }

  updateProduct(productId: string, title: string, desc: string, price: number) {
    const [product, index] = this.findProduct(productId);

    const updatedProduct = { ...product };
    if (title) {
      updatedProduct.title = title;
    }

    if (desc) {
      updatedProduct.description = desc;
    }

    if (price) {
      updatedProduct.price = price;
    }

    this.products[index] = updatedProduct;
  }

  private findProduct(productId: string): [Product, number] {
    const index = this.products.findIndex(
      (product) => product.id === productId,
    );
    const product = this.products[index];
    if (!product) {
      throw new NotFoundException();
    }

    return [product, index];
  }

  deleteProduct(productId: string) {
    const [, index] = this.findProduct(productId);
    this.products = this.products.splice(index);

    return null;
  }
}
