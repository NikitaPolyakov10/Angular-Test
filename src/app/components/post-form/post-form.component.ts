import { Component, OnInit, Output } from '@angular/core';
import { Post } from 'src/app/app.component';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss'],
})
export class PostFormComponent implements OnInit {
  @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>();

  title = '';
  text = '';

  constructor() {}

  ngOnInit(): void {}

  addPost() {
    if (this.title.trim() && this.text.trim()) {
      const newPost: Post = {
        title: this.title,
        text: this.text,
      };
      this.onAdd.emit(newPost);

      this.title = '';
      this.text = '';
    }
  }
}
