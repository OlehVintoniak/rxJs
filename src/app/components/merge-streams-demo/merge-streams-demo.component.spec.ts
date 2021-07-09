import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeStreamsDemoComponent } from './merge-streams-demo.component';

describe('MergeStreamsDemoComponent', () => {
  let component: MergeStreamsDemoComponent;
  let fixture: ComponentFixture<MergeStreamsDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MergeStreamsDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MergeStreamsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
