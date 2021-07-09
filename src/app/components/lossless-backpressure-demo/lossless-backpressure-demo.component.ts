import { Component, OnInit } from '@angular/core';
import { bufferCount } from 'rxjs/operators';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-lossless-backpressure-demo',
  templateUrl: './lossless-backpressure-demo.component.html',
  styleUrls: ['./lossless-backpressure-demo.component.scss']
})
export class LosslessBackpressureDemoComponent implements OnInit {

  public results: string = '';

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProductsUpdates()
      .pipe(
        bufferCount(5) // bufferTime(1000)
      )
      .subscribe(products => {
        var productsNames = products.map(p => p.name).join(',');
        this.results += ` Products ${productsNames} have been updated.`;
      });
  }

}
