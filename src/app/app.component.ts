import { Component } from '@angular/core';
import { Car } from './interface/car';

export interface Post {
  title: string;
  text: string;
  id?: any;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
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
    },
  ];

  updatePosts(post: Post) {
    this.posts.unshift(post);
  }
}
