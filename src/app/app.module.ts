import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductComponentComponent } from './product-component/product-component.component';
import { ProductFooterComponent } from './product-footer/product-footer.component';
import { RouterModule, Routes } from '@angular/router';
import { AddProductsComponent } from './add-products/add-products.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { ReactiveFormsModule } from '@angular/forms';


const appRoutes: Routes = [
  { path: '', component: ProductComponentComponent },
  { path: 'add-product',  component: AddProductsComponent },
  { path: 'add-product/:id',  component: AddProductsComponent },
  { path: 'description/:id', component: ProductDescriptionComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductComponentComponent,
    AddProductsComponent,
    ProductFooterComponent,
    ProductDescriptionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
