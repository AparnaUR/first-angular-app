import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../Model/products';


@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {

  constructor() { }
  @Input() item: Product;
  ngOnInit() {
  }

}
