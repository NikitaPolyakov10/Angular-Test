import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LogServiceService {
  log(text: string): void {
    console.log(`Log: ${text}`);
  }
}
