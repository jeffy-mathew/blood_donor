import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcelconverterComponent } from './excelconverter.component';

describe('ExcelconverterComponent', () => {
  let component: ExcelconverterComponent;
  let fixture: ComponentFixture<ExcelconverterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcelconverterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcelconverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
