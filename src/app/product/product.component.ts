import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductService } from '../service/product.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, AfterViewInit {
  @ViewChild('input') input: ElementRef;
  @ViewChild('selected') selected: ElementRef;

  list: string[];
  products: Product[];
  key: string;
  subscription: Subscription[];

  constructor(private productService: ProductService, private element: ElementRef) {

  }

  ngAfterViewInit() {
    this.subscription = [this.filterEnterEvent(), this.filterKeyupEvent()];
  }

  ngOnInit() {
    this.products = this.productService.getall();
  }

  ngOnDestory() {
    console.log('destory');
    this.subscription.forEach( s => s.unsubscribe() );
  }

  buttonEnterEvent() {
    console.log(this.list);
    //  this.list = this.productService.getall().map(p => p.productCode);
  }

  filterEnterEvent() {
    console.log(this.element.nativeElement);
    return Observable.fromEvent(this.input.nativeElement, 'input')
      .filter(e => e['target'].value.length > 0)
      .debounceTime(500)
      .switchMap((e) => this.productService.getAutoComplete(e['target'].value))
      .subscribe((p) => { this.list = p.map(s => s.productName); });
  }

  filterKeyupEvent() {
    return Observable.fromEvent(this.input.nativeElement, 'keyup')
      .filter(e => e['target'].value == '')
      .subscribe(() => { this.list = []; });
  }

  suggestSelected(key: string) {
    // console.log(key);
    this.input.nativeElement.value = key;
    this.list = [];
  }

}