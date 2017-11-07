import { Component, OnInit } from '@angular/core';
import { PurchaseOrder, PurchaseOrderProduct } from '../models/purchaseorder.model';
import { PurchaseorderService } from '../service/purchaseorder.service';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-purchaseorder',
  templateUrl: './purchaseorder.component.html',
  styleUrls: ['./purchaseorder.component.scss']
})
export class PurchaseorderComponent implements OnInit {

  purchaseOrders: PurchaseOrder[];
  tmpPurchaseOrder: PurchaseOrder;
  tmpPurchaseOrderProducts: PurchaseOrderProduct[];

  public myForm: FormGroup; // our form model


  constructor(private service: PurchaseorderService,
    private _fb: FormBuilder) { }

  ngOnInit() {
    this.purchaseOrders = this.service.getAllOrders();

    this.myForm = this._fb.group({
      purchaseOrderNo: [''],
      vendorNo: [''],
      purchaseOrderProducts: this._fb.array([
        this.initPurchaseOrderProduct(),
      ])
    });
  }

  initPurchaseOrderProduct() {
    // initialize our address
    return this._fb.group({
      productCode: [''],
      productName: [''],
      productDesc: [''],
      unitCost: [0],
      volumn: [0]
    });
  }

  add() {
    // add address to the list
    const control = <FormArray>this.myForm.controls['purchaseOrderProducts'];
    control.push(this.initPurchaseOrderProduct());
  }

  remove(i: number) {
    // remove address from the list
    const control = <FormArray>this.myForm.controls['purchaseOrderProducts'];
    control.removeAt(i);
  }


  save(model: PurchaseOrder) {
    console.log(model);
  }

}
