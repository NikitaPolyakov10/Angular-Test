import { Injectable } from '@angular/core';
import { LogServiceService } from './log-service.service';

@Injectable({
  providedIn: 'root',
})
export class AppCounterService {
  constructor(public logService: LogServiceService) {}
  counter = 0;

  increase() {
    this.counter++;
    this.logService.log('Counter increased');
  }

  decrease() {
    this.counter--;
    this.logService.log('Counter decreased');
  }
}
