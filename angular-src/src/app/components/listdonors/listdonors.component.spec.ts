import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListdonorsComponent } from './listdonors.component';

describe('ListdonorsComponent', () => {
  let component: ListdonorsComponent;
  let fixture: ComponentFixture<ListdonorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListdonorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListdonorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
