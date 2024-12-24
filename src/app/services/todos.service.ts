import { inject, Injectable } from '@angular/core';
import { Todo } from '../interface/todo.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  http = inject(HttpClient);

  getTodosFromAPI(): Observable<Todo[]> {
    const url = `https://jsonplaceholder.typicode.com/todos`;
    return this.http.get<Todo[]>(url);
  }
}
