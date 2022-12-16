import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipkartAppComponent } from './flipkart-app.component';

describe('FlipkartAppComponent', () => {
  let component: FlipkartAppComponent;
  let fixture: ComponentFixture<FlipkartAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlipkartAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlipkartAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
