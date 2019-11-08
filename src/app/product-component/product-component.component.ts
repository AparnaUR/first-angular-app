import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../Model/products';
@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.css']
})
export class ProductComponentComponent implements OnInit {
  prod: Product[];
  constructor(private productService: ProductService) { }
  getProd(): void {
    this.prod = this.productService.getProducts();
  }
  ngOnInit() {
    this.getProd();
  }

}
