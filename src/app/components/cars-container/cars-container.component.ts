import { Component, Input, OnInit } from '@angular/core';
import { Car } from 'src/app/interface/car';

@Component({
  selector: 'app-cars-container',
  templateUrl: './cars-container.component.html',
  styleUrls: ['./cars-container.component.scss'],
})
export class CarsContainerComponent implements OnInit {
  cars: Car[] = [
    // { name: 'Tesla', speed: 200, abs: false, id: 1 },
    // { name: 'BMW', speed: 220, abs: true, id: 2 },
    // { name: 'Audi', speed: 100, abs: true, id: 3 },
  ];

  updateCars(newCar: any) {
    this.cars.unshift(newCar);
    console.log('New car:', newCar);
  }

  constructor() {}

  ngOnInit(): void {}
}
