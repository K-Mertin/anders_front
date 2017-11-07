import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { VendorComponent } from './vendor/vendor.component';
import { PurchaseorderComponent } from './purchaseorder/purchaseorder.component';
import { HeaderComponent } from './shared';
import { HomeComponent } from './home/home.component';
import { APP_ROUTES } from './route';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ProductService } from './service/product.service';
import { PurchaseorderService } from './service/purchaseorder.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    VendorComponent,
    PurchaseorderComponent,
    HeaderComponent,
    HomeComponent,
  ],
  imports: [
    BsDropdownModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(APP_ROUTES),
  ],
  providers: [ProductService, PurchaseorderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
