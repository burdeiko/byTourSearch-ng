import { Component, OnInit } from '@angular/core';
import { Country } from '../models/country';
import { CountryService } from '../services/country.service';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.css']
})

export class ToursComponent implements OnInit {
  constructor(private countryService: CountryService) {
    countryService.getCountries().subscribe(
      (data: Country[]) => this.countries = data
    );
    
  }
  dateFrom: NgbDateStruct;
  dateTo: NgbDateStruct;

  ngOnInit() {
  }

  countries: Country[]
}
