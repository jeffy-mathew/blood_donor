import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingapprovalsComponent } from './pendingapprovals.component';

describe('PendingapprovalsComponent', () => {
  let component: PendingapprovalsComponent;
  let fixture: ComponentFixture<PendingapprovalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingapprovalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingapprovalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
