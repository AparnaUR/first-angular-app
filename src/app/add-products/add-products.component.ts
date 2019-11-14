import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {
  myForm: FormGroup;
  id: number;
  private formData: any;
  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) { }
  ngOnInit() {
    this.myForm = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
      description: new FormControl('', [Validators.required, Validators.maxLength(500)]),
      price: new FormControl('', Validators.required),
      imageUrl: new FormControl('', Validators.required),
      isAvailable: new FormControl(''),
    });
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      if (this.id) {
      this.productService.filterProducts(this.id).subscribe(data => {
        this.formData = data;
        this.myForm.patchValue({
          title: this.formData.title,
          description: this.formData.description,
          price: this.formData.price,
          imageUrl: this.formData.imageUrl,
          isAvailable: this.formData.isAvailable
        });
      });
    }
    });
  }
  onSubmit(data) {
    console.log(data);
    if (this.id) {
      this.productService.updateProducts(this.myForm.value, this.id).subscribe(parameter => {
        alert( 'Product updated successfully');
        this.router.navigate(['']);
      });
    } else {
      this.productService.addProducts(this.myForm.value).subscribe(parameter => {
        alert( 'Product added successfully');
        this.router.navigate(['']);
      });
    }

}
}
