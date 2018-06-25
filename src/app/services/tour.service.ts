import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const toursUrl = 'http://localhost:59911/api/tours/tours';

@Injectable({
  providedIn: 'root'
})
export class TourService {
  constructor (private http: HttpClient) { }
  getTours() {
    return this.http.get(toursUrl);
  }
}
