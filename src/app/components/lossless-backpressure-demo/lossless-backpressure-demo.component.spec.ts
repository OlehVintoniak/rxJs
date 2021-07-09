import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LosslessBackpressureDemoComponent } from './lossless-backpressure-demo.component';

describe('LosslessBackpressureDemoComponent', () => {
  let component: LosslessBackpressureDemoComponent;
  let fixture: ComponentFixture<LosslessBackpressureDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LosslessBackpressureDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LosslessBackpressureDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
