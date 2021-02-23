import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HurtsComponent } from './hurts.component';

describe('HurtsComponent', () => {
  let component: HurtsComponent;
  let fixture: ComponentFixture<HurtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HurtsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HurtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
