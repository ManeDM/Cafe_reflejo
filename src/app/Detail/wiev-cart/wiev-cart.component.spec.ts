import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WievCartComponent } from './wiev-cart.component';

describe('WievCartComponent', () => {
  let component: WievCartComponent;
  let fixture: ComponentFixture<WievCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WievCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WievCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
