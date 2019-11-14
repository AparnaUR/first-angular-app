import { Injectable } from '@angular/core';
import { Product } from '../Model/products';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  actionUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) { }
  private prod: Array<Product> = [];
  getProducts() {
    return this.http.get(this.actionUrl + '/product/'); // observable
  }
  addProducts(data) {
  // this.prod.push(data);
  return this.http.post(this.actionUrl + '/product/', data);
  }
  filterProducts(id) {
    return this.http.get(this.actionUrl + '/product/' + id); // observable
  }
  updateProducts(data,id) {
    return this.http.put(this.actionUrl + '/product/' + id, data); // observable
  }
  deleteProduct(id) {
    return this.http.delete(this.actionUrl + '/product/' + id);
  }
}
