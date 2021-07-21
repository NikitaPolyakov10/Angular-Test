import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/interface/car';

@Component({
  selector: 'app-cars-container',
  templateUrl: './cars-container.component.html',
  styleUrls: ['./cars-container.component.scss'],
})
export class CarsContainerComponent implements OnInit {
  cars: Car[] = [
    { name: 'BMW', speed: 200, abs: true },
    { name: 'Audi', speed: 230, abs: false },
    { name: 'Volvo', speed: 180, abs: true },
    { name: 'Mercedes', speed: 205, abs: false },
    { name: 'Porshe', speed: 250, abs: true },
  ];

  constructor() {}

  ngOnInit(): void {}
}
