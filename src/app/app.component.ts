import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  numbers:number[] = [1,2,3,4,5];
  obj1 = [
    {title: 'Post 1', author: 'Author 1', comments: [
      {name: 'Name 1', text: 'lorem'},
      {name: 'Name 2', text: 'lorem'}
    ]},
    {title: 'Post 2', author: 'Author 2', comments: [
      {name: 'Name 1', text: 'lorem'},
      {name: 'Name 2', text: 'lorem'}
    ]},
    {title: 'Post 3', author: 'Author 3', comments: [
      {name: 'Name 1', text: 'lorem'},
      {name: 'Name 2', text: 'lorem'}
    ]},
    {title: 'Post 4', author: 'Author 4', comments: [
      {name: 'Name 1', text: 'lorem'},
      {name: 'Name 2', text: 'lorem'}
    ]}
  ]
}
