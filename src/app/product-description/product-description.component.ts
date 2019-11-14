import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../Model/products';
import { ProductService } from '../services/product.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {

  constructor(private productService: ProductService) {}
  @Input() item: Product;
  @Output() isDeleted = new EventEmitter<boolean>();
  @Output() isIncremented = new EventEmitter<boolean>();
  count = 0;
  ngOnInit() {
  }
  delete(id) {
  this.productService.deleteProduct(id).subscribe(data => {
    alert( 'Product deleted successfully');
    this.isDeleted.emit();
  });
}
increment() {
  this.isIncremented.emit();
}
}
