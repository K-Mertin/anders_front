import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { AppComponent } from './app.component';
import { PurchaseorderComponent } from './purchaseorder/purchaseorder.component';

export const APP_ROUTES: Routes = [
  { path: 'product', component: ProductComponent },
  { path: 'home', component: HomeComponent },
  { path: 'purchaseorder', component: PurchaseorderComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
