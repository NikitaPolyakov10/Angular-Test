import { Component, OnInit } from '@angular/core';
import { AppCounterService } from '../services/app-counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
  constructor(public appCounterService: AppCounterService) {}

  ngOnInit(): void {}
}
