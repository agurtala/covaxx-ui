// /************************** Shino's Contribution *********************/

import { Component, OnInit } from '@angular/core';
import {ApiService, Patient, Session} from '../../services/api.service';



@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingPageComponent implements OnInit {

  // @ts-ignore
  patientDisability: string;
  // @ts-ignore
  patientMedCondition: string;

  patientOccupation = '';

  // @ts-ignore
  patient: Patient;
  // @ts-ignore
  patientID: string;

  // @ts-ignore
  session: Session;
  // @ts-ignore
  sessionId: string;

  constructor(
    public api: ApiService
  ) { }

// @ts-ignore
  currentPractice: Practice[];
  // @ts-ignore
  currentSession: Session[];
  async ngOnInit(): Promise<void> {

    // this.patientId = this.api.getPatient (this.route.snapshot.params.patientId) ;
    // @ts-ignore
    this.currentPractice = await this.api.getPractice();
    // @ts-ignore
    this.currentSession = await this.api.getSession();

  }

  // tslint:disable-next-line:typedef
  async submit() {
    await this.api.createPatient(this.patient);
  }
}

// /************************** Shino's Contribution *********************/
