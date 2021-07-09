import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductService } from 'src/app/services/product.service';
import { AsyncPipesDemoComponent } from './components/async-pipes-demo/async-pipes-demo.component';
import { MergeStreamsDemoComponent } from './components/merge-streams-demo/merge-streams-demo.component';
import { LossyBackpressureDemoComponent } from './components/lossy-backpressure-demo/lossy-backpressure-demo.component';
import { LosslessBackpressureDemoComponent } from './components/lossless-backpressure-demo/lossless-backpressure-demo.component';
import { ReduxScanDemoComponent } from './components/redux-scan-demo/redux-scan-demo.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AsyncPipesDemoComponent,
    MergeStreamsDemoComponent,
    LossyBackpressureDemoComponent,
    LosslessBackpressureDemoComponent,
    ReduxScanDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
