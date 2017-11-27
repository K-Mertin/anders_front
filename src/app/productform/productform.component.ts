import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Product, PRODUCTS } from '../models/product.model';
import { ProductService } from '../service/product.service';

@Component({
  moduleId: module.id,
  selector: 'app-productform',
  templateUrl: './productform.component.html',
  styleUrls: ['./productform.component.scss']
})

export class ProductformComponent implements OnInit {

  tempProduct: Product;

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  save(model: Product) {
    this.productService.post(model);
  }

}
