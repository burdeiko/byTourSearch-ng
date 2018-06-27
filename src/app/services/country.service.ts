import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const countriesUrl = 'http://localhost:5000/api/countries/countries';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  constructor(private http: HttpClient) { }
  getCountries() {
    return this.http.get(countriesUrl)
  }
}
