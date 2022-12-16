import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoredomComponent } from './boredom.component';

describe('BoredomComponent', () => {
  let component: BoredomComponent;
  let fixture: ComponentFixture<BoredomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoredomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoredomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
