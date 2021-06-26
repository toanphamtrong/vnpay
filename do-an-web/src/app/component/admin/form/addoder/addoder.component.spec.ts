import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddoderComponent } from './addoder.component';

describe('AddoderComponent', () => {
  let component: AddoderComponent;
  let fixture: ComponentFixture<AddoderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddoderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddoderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
