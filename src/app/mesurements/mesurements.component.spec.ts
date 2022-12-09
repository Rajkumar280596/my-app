import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesurementsComponent } from './mesurements.component';

describe('MesurementsComponent', () => {
  let component: MesurementsComponent;
  let fixture: ComponentFixture<MesurementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesurementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesurementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
