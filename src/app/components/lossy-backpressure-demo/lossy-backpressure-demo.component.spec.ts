import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LossyBackpressureDemoComponent } from './lossy-backpressure-demo.component';

describe('LossyBackpressureDemoComponent', () => {
  let component: LossyBackpressureDemoComponent;
  let fixture: ComponentFixture<LossyBackpressureDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LossyBackpressureDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LossyBackpressureDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
