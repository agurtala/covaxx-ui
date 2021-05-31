import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export interface Certificate{
  certID: string;
  files: Map<string, string>;
  certDate: string;
  certTime: string;
  patientID: string;
  vacID: string;
}

export interface Patient{
  patientID: string;
  patientName: string;
}

export interface Vaccine{
  vacID: string;
  vacType: string;
  facility: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    public http: HttpClient
  ) { }

  getCertificate(patientID: string): Promise<Certificate>{
    return this.http.get<Certificate>('http://localhost:8080/patient/' + patientID + '/certificate').toPromise();
  }

  getCertificates(): Promise<Certificate[]> {
    return this.http.get<Certificate[]>('http://localhost:8080/certificate/').toPromise();
  }

  getPatient(patientID: string): Promise<Patient>{
    return this.http.get<Patient>('http://localhost:8080/pateint/' + patientID).toPromise();

  }

  getPatients(): Promise<Patient[]> {
    return this.http.get<Patient[]>('http://localhost:8080/pateint').toPromise();
  }

  getVaccine(vacID: string): Promise<Vaccine>{
    return this.http.get<Vaccine>('http://localhost:8080/vaccine/' + vacID).toPromise();

  }

  getVaccines(): Promise<Vaccine[]> {
    return this.http.get<Vaccine[]>('http://localhost:8080/vaccine').toPromise();
  }

  // tslint:disable-next-line:no-shadowed-variable
  // createCertificate(Certificate: Certificate): Certificate{
    // return Certificate;
   // }

  // tslint:disable-next-line:no-shadowed-variable
  // updateCertificate(Certificate: Certificate): Certificate{
    // return Certificate;
  // }
}
