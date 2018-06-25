import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';

import { HotelMappingsComponent } from './hotel-mappings/hotel-mappings.component';
import { ToursComponent } from './tours/tours.component';

import {Country} from './models/country'

@NgModule({
  declarations: [
    AppComponent,
    HotelMappingsComponent,
    ToursComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
