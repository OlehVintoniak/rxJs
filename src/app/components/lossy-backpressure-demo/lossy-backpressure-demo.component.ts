import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import {  debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-lossy-backpressure-demo',
  templateUrl: './lossy-backpressure-demo.component.html',
  styleUrls: ['./lossy-backpressure-demo.component.scss']
})
export class LossyBackpressureDemoComponent implements OnInit {

  public search$ = new Subject<string>();
  public searchResult: string;

  constructor() { }

  ngOnInit(): void {
    this.search$.pipe(debounceTime(300))
    .subscribe(res => this.searchResult = res);
  }

}
