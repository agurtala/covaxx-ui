// ************************** Alfiyyah's Contribution *********************//


import { Component, OnInit } from '@angular/core';
import {ApiService, Certificate, Patient, Vaccine} from '../../services/api.service';


@Component({
  selector: 'app-certificate-page',
  templateUrl: './certificate-page.component.html',
  styleUrls: ['./certificate-page.component.css']
})
export class CertificatePageComponent implements OnInit {

  // @ts-ignore
  certificate: Certificate;
  // @ts-ignore
  certID: string;

  // @ts-ignore
  patient: Patient;
  // @ts-ignore
  patientID: string;

  // @ts-ignore
  vaccine: Vaccine;
  // @ts-ignore
  vacID: string;

  constructor(
    public api: ApiService
  ) { }

// @ts-ignore
currentCertificates: Certificate[];

async ngOnInit(): Promise<void> {

    // this.certID = this.api.getCertificate(this.route.snapshot.params.certID) ;
  this.currentCertificates = await this.api.getCertificates();
}

}

// ************************** Alfiyyah's Contribution *********************//
