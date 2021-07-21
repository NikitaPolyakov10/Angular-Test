import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Car } from 'src/app/interface/car';

@Component({
  selector: 'app-cars-form',
  templateUrl: './cars-form.component.html',
  styleUrls: ['./cars-form.component.scss'],
})
export class CarsFormComponent implements OnInit {
  @Output() onAddCar = new EventEmitter();

  name = '';
  speed = 0;
  abs = false;

  addCar() {
    if (this.name.trim() && this.speed > 0) {
      const car: Car = {
        name: this.name,
        speed: this.speed,
        abs: this.abs,
      };
      this.onAddCar.emit(car);

      this.name = '';
      this.speed = 0;
      this.abs = false;
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
