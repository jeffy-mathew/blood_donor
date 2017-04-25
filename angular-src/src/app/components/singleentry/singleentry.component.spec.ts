import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleentryComponent } from './singleentry.component';

describe('SingleentryComponent', () => {
  let component: SingleentryComponent;
  let fixture: ComponentFixture<SingleentryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleentryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
