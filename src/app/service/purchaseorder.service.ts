import { Injectable } from '@angular/core';
import { PurchaseOrder, PurchaseOrderProduct, PURCHASEORDER } from '../models/purchaseorder.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';

@Injectable()
export class PurchaseorderService {

  constructor() { }

  getAllOrders(): Observable<PurchaseOrder[]> {
    return Observable.of(PURCHASEORDER).delay(2000);
    // return Observable.of(PURCHASEORDER).delay(2000).toPromise();

    // new Promise(
    //   (resolve, reject) => {
    //     setTimeout(() => resolve(PURCHASEORDER), 2000);
    //   }
    // );
    // Promise.resolve(PURCHASEORDER);
  }

  getOrderNos(): Observable<string[]> {
    return Observable.of(PURCHASEORDER.map(purchseorders => purchseorders.purchaseOrderNo));


  }
  getAutoComplete(key: string): Observable<string[]> {
    return Observable.of(PURCHASEORDER.map(purchseorders => purchseorders.purchaseOrderNo).filter(str => str.startsWith(key)));
  }
}
