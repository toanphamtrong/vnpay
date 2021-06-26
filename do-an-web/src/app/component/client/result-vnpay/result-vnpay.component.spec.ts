import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultVnpayComponent } from './result-vnpay.component';

describe('ResultVnpayComponent', () => {
  let component: ResultVnpayComponent;
  let fixture: ComponentFixture<ResultVnpayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultVnpayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultVnpayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
