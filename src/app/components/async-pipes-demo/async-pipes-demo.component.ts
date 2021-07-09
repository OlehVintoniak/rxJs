import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-async-pipes-demo',
  templateUrl: './async-pipes-demo.component.html',
  styleUrls: ['./async-pipes-demo.component.scss']
})
export class AsyncPipesDemoComponent implements OnInit {

  products$: Observable<Product[]>;

  constructor(private productService: ProductService) {
    this.products$ = this.productService.getProducts();

   }

  ngOnInit(): void {
  }

}
