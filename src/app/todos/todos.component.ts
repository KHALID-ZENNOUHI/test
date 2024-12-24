import {Component, OnInit, signal} from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Todo } from '../interface/todo.interface';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-todo',
  standalone: true,
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todoItems = signal<Todo[]>([]);

  constructor(private todoService: TodosService) {}

  ngOnInit(): void {
    this.todoService.getTodosFromAPI().pipe(
      catchError(err => {
        console.error('Error fetching todos:', err);
        return of([]);
      })
    ).subscribe((todos: Todo[]) => {
      this.todoItems.set(todos);
    });
  }
}
