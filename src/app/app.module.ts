import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HotelMappingsComponent } from './hotel-mappings/hotel-mappings.component';
import { ToursComponent } from './tours/tours.component';

import {Country} from './models/country';

@NgModule({
  declarations: [
    AppComponent,
    HotelMappingsComponent,
    ToursComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [{provide: 'api-host', useValue: 'http://localhost:59911/api/'}],
  bootstrap: [AppComponent]
})

export class AppModule { }
