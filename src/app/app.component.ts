import { Component, OnInit } from '@angular/core';
import { Todo } from './interfaces/todo';
import { delay } from 'rxjs/operators';
import { TodosService } from './services/todos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  todos: Todo[] = [];

  todoTitle = '';
  loading = false;
  error = '';

  constructor(private todosService: TodosService) {}

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

    this.todosService.addTodo(newTodo).subscribe((resp) => {
      this.todos.unshift(resp);
      this.todoTitle = '';
    });
  }

  fetchTodos() {
    this.loading = true;
    this.todosService.fetchTodos().subscribe(
      (resp) => {
        this.todos = resp;
        this.loading = false;
      },
      (err) => {
        this.error = err.message;
        this.loading = false;
      }
    );
  }

  removeTodo(id: number) {
    this.todosService.removeTodo(id).subscribe(() => {
      this.todos = this.todos.filter((item) => item.id !== id);
    });
  }

  completeTodo(id: number) {
    this.todosService.completeTodo(id).subscribe((resp) => {
      const target = this.todos.find((item) => {
        return item.id === resp.id;
      });
      target!.completed = true;
    });
  }
}
