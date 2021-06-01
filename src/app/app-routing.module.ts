/*// ************************** Alfiyyah's Contribution *********************!/*/


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {CertificatePageComponent} from './pages/certificate-page/certificate-page.component';
import {BookingPageComponent} from './pages/booking/booking.component';
import {InboxComponent} from './pages/inbox/inbox.component';

const routes: Routes = [
  {
    path: 'homepage',
    component: HomePageComponent
  },
  {
    path: 'booking',
    component: BookingPageComponent
  },
  {
    path: 'certificate',
    component: CertificatePageComponent
  },
  {
    path: 'inbox',
    component: InboxComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

/*// ************************** Alfiyyah's Contribution *********************!/*/
