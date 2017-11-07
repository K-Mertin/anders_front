import { Component, OnInit } from '@angular/core';
import { PurchaseOrder, PurchaseOrderProduct } from '../models/purchaseorder.model';
import { PurchaseorderService } from '../service/purchaseorder.service';

@Component({
  selector: 'app-purchaseorder',
  templateUrl: './purchaseorder.component.html',
  styleUrls: ['./purchaseorder.component.scss']
})
export class PurchaseorderComponent implements OnInit {

  purchaseOrders: PurchaseOrder[];

  constructor(private service: PurchaseorderService) { }

  ngOnInit() {
    this.purchaseOrders = this.service.getAllOrders();
  }

}
