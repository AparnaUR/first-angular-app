import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {
  myForm: FormGroup;
  constructor(private productService: ProductService) { }
  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(4)]),
      description: new FormControl('', [Validators.required, Validators.maxLength(500)]),
      price: new FormControl('', Validators.pattern(/[a-z]/gi)),
      image: new FormControl(),
      imageAlt: new FormControl(),
      isAvailable: new FormControl(),
    });
  }
  onSubmit(data) {
    // console.log(data);
    this.productService.addProducts(this.myForm.value);
    // console.log(this.myForm.value);
  }
}
