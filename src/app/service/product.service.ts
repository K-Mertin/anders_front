import { Injectable } from '@angular/core';
import { Product, PRODUCTS } from '../models/product.model';

@Injectable()
export class ProductService {

  constructor() { }

  getall(): Product[] {

    return PRODUCTS;

  }

}
