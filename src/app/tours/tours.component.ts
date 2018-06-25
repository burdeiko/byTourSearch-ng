import { Component, OnInit } from '@angular/core';
import { Country } from '../models/country';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.css']
})
export class ToursComponent implements OnInit {

  constructor() {
    this.countries = [];
  }

  ngOnInit() {
  }

  countries: Country[]
}
