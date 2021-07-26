import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../interfaces/todo';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  constructor(private http: HttpClient) {}

  addTodo(todo: Todo): Observable {
    return this.http.post<Todo>(
      'http://jsonplaceholder.typicode.com/todos',
      todo
    );
  }
}
