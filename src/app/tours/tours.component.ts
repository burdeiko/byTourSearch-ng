import { Component, OnInit } from '@angular/core';
import { Country } from '../models/country';
import { Tour } from '../models/tour';
import { CountryService } from '../services/country.service';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { SearchOptions } from '../models/searchOptions';
import { TourService } from '../services/tour.service';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.css']
})

export class ToursComponent implements OnInit {
  constructor(private countryService: CountryService, private toursService: TourService) {
    countryService.getCountries().subscribe(
      (data: Country[]) => this.countries = data
    );
    let now = new Date();
    this.dateFrom = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
    this.dateTo = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate() + 7};
  }

  private _dateFrom: NgbDateStruct;
  get dateFrom(): NgbDateStruct {
    return this._dateFrom;
  }
  set dateFrom(value: NgbDateStruct) {
    this.searchOptions.checkInDateFrom = this.dateToString(value);
    this._dateFrom = value;
  }

  private _dateTo: NgbDateStruct;
  get dateTo(): NgbDateStruct {
    return this._dateTo;
  }
  set dateTo(value: NgbDateStruct) {
    this.searchOptions.checkInDateTo = this.dateToString(value);
    this._dateTo = value;
  }


  searchResults: Tour[];

  getDistinctHotelsFromResults() {
    return this.searchResults.map((e) => e.hotel);
  }

  getToursForHotel(hotelId) {
    return this.searchResults.filter(e => e.hotel.id === hotelId)
  }

  searchOptions: SearchOptions = {
    hotelId: null,
    hotelName: null,
    checkInDateFrom: null,
    checkInDateTo: null,
    durationFrom: 6,
    durationTo: 8
  };

  onSearchClick() {
    this.toursService.search(this.searchOptions).subscribe((data: Tour[]) => {
      this.searchResults = data;
    });
  }

  dateToString(date: NgbDateStruct) {
    return date.year + '-' + date.month + '-' + date.day;
  }

  ngOnInit() {
  }

  countries: Country[]
}
