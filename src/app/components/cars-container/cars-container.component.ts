import { Component, Input, OnInit } from '@angular/core';
import { Car } from 'src/app/interface/car';

@Component({
  selector: 'app-cars-container',
  templateUrl: './cars-container.component.html',
  styleUrls: ['./cars-container.component.scss'],
})
export class CarsContainerComponent implements OnInit {
  cars: Car[] = [
    { name: 'Tesla', speed: 200, abs: false, id: Number(new Date()) },
    { name: 'BMW', speed: 220, abs: true, id: Number(new Date()) + 1 },
    { name: 'Audi', speed: 100, abs: true, id: Number(new Date()) + 2 },
  ];

  updateCars(newCar: any) {
    this.cars.unshift(newCar);
    console.log('New car:', newCar);
  }

  onRemoveCar(id: number) {
    this.cars = this.cars.filter((car) => car.id !== id);
  }

  constructor() {}

  ngOnInit(): void {
    console.log('cars', this.cars);
  }
}
