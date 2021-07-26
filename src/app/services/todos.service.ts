import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../interfaces/todo';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  constructor(private http: HttpClient) {}

  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(
      'http://jsonplaceholder.typicode.com/todos',
      todo
    );
  }
  fetchTodos(): Observable<Todo[]> {
    return this.http
      .get<Todo[]>('http://jsonplaceholder.typicode.com/todos?_limit=3')
      .pipe(delay(500));
  }
  removeTodo(id: number): Observable<void> {
    return this.http.delete<void>(
      `http://jsonplaceholder.typicode.com/todos/${id}`
    );
  }

  completeTodo(id: number): Observable<Todo> {
    return this.http.put<Todo>(
      `http://jsonplaceholder.typicode.com/todos/${id}`,
      {
        completed: true,
      }
    );
  }
}
