import { Injectable } from '@angular/core';
import { Product, PRODUCTS } from '../models/product.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';

@Injectable()
export class ProductService {

  constructor() { }

  getall(): Product[] {

    return PRODUCTS;

  }
  getAutoComplete(key: string): Observable<Product[]> {
    return Observable.of(PRODUCTS).map(products => products.filter(product => product.productName.toLowerCase().startsWith(key.toLowerCase())));
  }
}
