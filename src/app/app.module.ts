import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { VendorComponent } from './vendor/vendor.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { HeaderComponent } from './shared';
import { HomeComponent } from './home/home.component';

const rootRoute: ModuleWithProviders = RouterModule.forRoot([
  { path: 'product', component: ProductComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch:'full'},
], { useHash: true });

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    VendorComponent,
    PurchaseComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    rootRoute
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
