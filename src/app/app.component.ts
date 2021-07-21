import { Component } from '@angular/core';

export interface Post {
  title: string;
  text: string;
  id?: any;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: Post[] = [
    {
      title: 'Post title 1',
      text: 'Post text 1',
      id: 1,
    },
    {
      title: 'Post title 2',
      text: 'Post text 2',
      id: 2,
    }
  ]

  title:string = 'Hello world'
}
