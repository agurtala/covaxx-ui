/************************** Shino's Contribution *********************/

import { ComponentFixture, TestBed } from '@angular/core/testing';

// @ts-ignore
import { BookingPageComponent } from './booking-page.component';

describe('BookingPageComponent', () => {
  let component: BookingPageComponent;
  let fixture: ComponentFixture<BookingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingPageComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

/************************** Shino's Contribution *********************/
