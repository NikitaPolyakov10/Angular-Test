import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Car } from 'src/app/interface/car';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss'],
})
export class CarsComponent implements OnInit {
  @Input() carItem!: Car;
  @Output() onRemove = new EventEmitter();

  onDelete() {
    this.onRemove.emit(this.carItem.id);
  }

  constructor() {}

  ngOnInit(): void {}
}
