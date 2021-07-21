import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Car } from 'src/app/interface/car';

@Component({
  selector: 'app-cars-form',
  templateUrl: './cars-form.component.html',
  styleUrls: ['./cars-form.component.scss'],
})
export class CarsFormComponent implements OnInit {
  @Output() onAddCar = new EventEmitter();
  @ViewChild('inputCarName', { static: true }) inputName: any;
  @ViewChild('inputCarSpeed') inputSpeed: any;

  name = '';
  speed = 0;
  abs = false;
  id = 1;

  addCar() {
    if (this.name.trim() && this.speed > 0) {
      const car: Car = {
        name: this.name,
        speed: this.speed,
        abs: this.abs,
        id: this.id
      };
      this.onAddCar.emit(car);

      this.name = '';
      this.speed = 0;
      this.abs = false;
      this.id = this.id++;
    }
  }

  focusName() {
    this.inputName.nativeElement.focus();
  }

  focusSpeed() {
    this.inputSpeed.nativeElement.focus();
  }

  constructor() {}

  ngOnInit(): void {
    this.inputName.nativeElement.focus();
  }
}
