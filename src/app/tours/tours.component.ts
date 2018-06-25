import { Component, OnInit } from '@angular/core';
import { Country } from '../models/country';
import {CountryService} from '../services/country.service';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.css']
})

export class ToursComponent implements OnInit {
  constructor(private countryService: CountryService) {
    countryService.getCountries().subscribe((data: Country[]) => this.countries = data);
  }

  ngOnInit() {
  }

  countries: Country[]
}
