import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelMappingsComponent } from './hotel-mappings.component';

describe('HotelMappingsComponent', () => {
  let component: HotelMappingsComponent;
  let fixture: ComponentFixture<HotelMappingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelMappingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelMappingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
