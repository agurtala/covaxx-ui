import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CertificatePageComponent } from './pages/certificate-page/certificate-page.component';
import {FormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {BookingPageComponent} from './pages/booking/booking.component';
import { InboxComponent } from './pages/inbox/inbox.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CertificatePageComponent,
    BookingPageComponent,
    InboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

