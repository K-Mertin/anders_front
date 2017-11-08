import { Component, OnInit } from '@angular/core';
import { PurchaseOrder, PurchaseOrderProduct } from '../models/purchaseorder.model';
import { Product } from '../models/product.model';
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
      purchaseOrderNo: ['', Validators.required],
      vendorNo: ['', Validators.required],
      purchaseOrderProducts: this._fb.array([
        this.initPurchaseOrderProduct(),
      ])
    });
    console.log(this.myForm);
  }

  initPurchaseOrderProduct() {
    // initialize our addres
    return this._fb.group({
      product: this._fb.group({
        productCode: ['', Validators.required],
        productName: ['', Validators.required],
        productDesc: ['', Validators.required]
      }),
      unitCost: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]+')])],
      volumn: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]+')])]
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
  }

}
