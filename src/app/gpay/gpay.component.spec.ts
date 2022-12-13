import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GpayComponent } from './gpay.component';

describe('GpayComponent', () => {
  let component: GpayComponent;
  let fixture: ComponentFixture<GpayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GpayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GpayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
