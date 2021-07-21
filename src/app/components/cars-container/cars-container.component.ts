import { Component, Input, OnInit } from '@angular/core';
import { Car } from 'src/app/interface/car';

@Component({
  selector: 'app-cars-container',
  templateUrl: './cars-container.component.html',
  styleUrls: ['./cars-container.component.scss'],
})
export class CarsContainerComponent implements OnInit {
  cars: Car[] = [];

  updateCars(newCar: any) {
    this.cars.unshift(newCar);
    console.log('New car:', newCar);
  }

  constructor() {}

  ngOnInit(): void {}
}
