import { Injectable } from '@angular/core';
import { PurchaseOrder, PurchaseOrderProduct, PURCHASEORDER } from '../models/purchaseorder.model';

@Injectable()
export class PurchaseorderService {

  constructor() { }

  getAllOrders(): PurchaseOrder[] {
    return PURCHASEORDER;
  }
}
