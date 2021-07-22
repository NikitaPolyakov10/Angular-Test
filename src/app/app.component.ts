import { Component } from '@angular/core';
import { Observable } from 'rxjs';

export interface Post {
  title: string;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  num: number = Math.E;
  str: string = 'sheldon cooper';
  date: Date = new Date();
  float: number = 0.15;

  obj: object = {
    a: 1,
    b: {
      c: 2,
      d: {
        e: 3,
        f: 4,
      },
    },
  };

  posts: Post[] = [
    { title: 'Angular', text: 'Angular awesome' },
    { title: 'React', text: 'React good' },
    { title: 'Vue', text: 'Vue unknown' },
  ];

  search = '';

  value: Promise<string> = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('Promise resolved');
    }, 3000);
  });

  dateNow: Observable<Date> = new Observable((obs) => {
    setInterval(() => {
      obs.next(new Date());
    }, 1000);
  });
}
