import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductComponentComponent } from './product-component/product-component.component';
import { ProductFooterComponent } from './product-footer/product-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductComponentComponent,
    ProductFooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
