import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReduxScanDemoComponent } from './redux-scan-demo.component';

describe('ReduxScanDemoComponent', () => {
  let component: ReduxScanDemoComponent;
  let fixture: ComponentFixture<ReduxScanDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReduxScanDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReduxScanDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
