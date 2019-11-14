import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../Model/products';
@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.css']
})
export class ProductComponentComponent implements OnInit {
  prod: any;
  count = 0;
  constructor(private productService: ProductService) { }
  getProd(): void {
    this.productService.getProducts().subscribe(response => {
      console.log(response);
      this.prod = response;
    });
  }
  ngOnInit() {
    this.getProd();
  }
  deleted(event) {
    this.getProd();
  }
  increment(event) {
    this.count++;
    console.log(this.count);
  }

}
