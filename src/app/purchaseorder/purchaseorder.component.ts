import { Component, OnInit, ViewChild } from '@angular/core';
import { PurchaseOrder, PurchaseOrderProduct } from '../models/purchaseorder.model';
import { Product } from '../models/product.model';
import { PurchaseorderService } from '../service/purchaseorder.service';
import { ProductService } from '../service/product.service';
import { Validators, FormGroup, FormArray, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-purchaseorder',
  templateUrl: './purchaseorder.component.html',
  styleUrls: ['./purchaseorder.component.scss']
})
export class PurchaseorderComponent implements OnInit {

  @ViewChild('f') form: any;
  purchaseOrders: PurchaseOrder[];
  tmpPurchaseOrder: PurchaseOrder = new PurchaseOrder();
  tmpPurchaseOrderProducts: PurchaseOrderProduct[] = [];

  public myForm: FormGroup; // our form model


  constructor(private service: PurchaseorderService,
    private productService: ProductService,
    private _fb: FormBuilder) { }

  ngOnInit() {
    this.addProduct();
    // this.productCodeField = new FormControl();
    // this.productCodeField.valueChanges
    //   .filter(term => term.length > 0)
    //   .subscribe(
    //   term => this.productService.getAutoComplete(term).subscribe((products) => this.searches = products.map(p => p.productName))
    //   );

    this.service.getAllOrders().subscribe(purchaseorders => this.purchaseOrders = purchaseorders);
    // this.service.getAllOrders().then( purchaseorders => this.purchaseOrders = purchaseorders);
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
    this.tmpPurchaseOrder = model;
    this.purchaseOrders.push(model);
    console.log(model);
  }

  logForm(value: any) {
    console.log(value);
  }


  addProduct(): void {
    this.tmpPurchaseOrderProducts.push({
      product: {
        productCode: null,
        productName: null,
        productDesc: null
      },
      unitCost: null,
      volumn: null
    });
  }

  removeLastProduct(): void {
    if (this.tmpPurchaseOrderProducts.length > 1) {
      this.tmpPurchaseOrderProducts.pop();
    }

  }

}
