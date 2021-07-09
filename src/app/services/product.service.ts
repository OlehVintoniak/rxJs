import { Injectable } from "@angular/core";
import { interval, Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { Product } from "src/app/models/product.model";

const PRODUCTS = [{
  id: 1,
  name: 'Ice Cream',
  price: 12
}, {
  id: 2,
  name: 'Butter',
  price: 22
},{
  id: 3,
  name: 'Meat',
  price: 23
},{
  id: 4,
  name: 'Carrot',
  price: 24
}];

@Injectable()
export class ProductService {

  getProducts(): Observable<Product[]> {
    return new Observable((observer) => {
      setTimeout(() => {
        observer.next(PRODUCTS);
      }, 2000);
    });
  }

  getProductsUpdates(): Observable<Product> {
    return interval(500).pipe(
      map(() => PRODUCTS[Math.floor(Math.random() * PRODUCTS.length)])
    );
  }
}