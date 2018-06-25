import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

const now = new Date();

@Component({
  selector: 'app-hotel-mappings',
  templateUrl: './hotel-mappings.component.html',
  styleUrls: ['./hotel-mappings.component.css']
})

export class HotelMappingsComponent implements OnInit {

  constructor() { }

  model: NgbDateStruct;
  date: {year: number, month: number};

  selectToday() {
    this.model = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
  }

  ngOnInit() {
  }

}
