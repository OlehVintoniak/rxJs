import { Component, OnInit } from '@angular/core';
import { merge, Observable, Subject } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { mergeMap, startWith, map } from 'rxJs/operators';

@Component({
  selector: 'app-merge-streams-demo',
  templateUrl: './merge-streams-demo.component.html',
  styleUrls: ['./merge-streams-demo.component.scss']
})
export class MergeStreamsDemoComponent {

  refreshButtonClickSubject = new Subject();

  model$ = new Observable<{ products: Product[], isLoading: boolean }>();

  constructor(private productService: ProductService) {
    const refreshButtonClick$ = this.refreshButtonClickSubject.asObservable();
    const refreshTrigger$ = refreshButtonClick$.pipe(
      startWith({})
    );

    const productList$ = refreshTrigger$.pipe(
      mergeMap(() => this.productService.getProducts())
    );

    this.model$ = merge(
      refreshTrigger$.pipe(map(() => ({ products: [], isLoading: true }))),
      productList$.pipe(map((products) => ({ products: products, isLoading: false })))
    );

   }

}
