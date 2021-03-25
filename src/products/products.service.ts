import { Product } from './product.model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  producs: Product[] = [];

  insertProduct(title: string, desc: string, price: number) {
    const prodId = new Date().toString();
    const newProduct = new Product(prodId, title, desc, price);

    this.producs.push(newProduct);
    return prodId;
  }
}
