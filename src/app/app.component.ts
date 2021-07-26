import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Todo } from './interfaces/todo';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  todos: Todo[] = [];

  todoTitle = '';
  loading = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchTodos();
  }

  addTodo() {
    if (!this.todoTitle.trim()) {
      return;
    }

    const newTodo: Todo = {
      title: this.todoTitle,
      completed: false,
    };


  }

  fetchTodos() {
    this.loading = true;
    this.http
      .get<Todo[]>('http://jsonplaceholder.typicode.com/todos?_limit=3')
      .pipe(delay(1500))
      .subscribe((resp) => {
        this.todos = resp;
        this.loading = false;
      });
  }

  removeTodo(id?: number) {
    this.http
      .delete<void>(`http://jsonplaceholder.typicode.com/todos/${id}`)
      .subscribe(() => {
        this.todos = this.todos.filter((item) => item.id !== id);
      });
  }
}
