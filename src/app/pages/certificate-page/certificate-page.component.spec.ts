// ************************** Alfiyyah's Contribution *********************//


import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificatePageComponent } from './certificate-page.component';

describe('CertificatePageComponent', () => {
  let component: CertificatePageComponent;
  let fixture: ComponentFixture<CertificatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificatePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

// ************************** Alfiyyah's Contribution *********************//
