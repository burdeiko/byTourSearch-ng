import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchOptions } from '../models/searchOptions';

const toursUrl = 'http://localhost:58521/api/tours/search';

@Injectable({
  providedIn: 'root'
})
export class TourService {
  constructor (private http: HttpClient) { }
  search(options: SearchOptions) {
    var requestUrl = toursUrl;
    for (let key in options) {
      if (options[key])
        requestUrl += (requestUrl.indexOf('?') === -1 ? '?' : '&') + key + '=' + options[key];
    }
    return this.http.get(requestUrl);
  }
}
