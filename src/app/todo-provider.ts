import {Todo} from './todo';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class TodoProvider {
  data: Array<Todo> = [];

  constructor(private http: HttpClient) { }

  load(): Observable<Array<Todo>> {
    return this.http.get('/assets/todos.json') as Observable<Array<Todo>>;
  }

  add(todo: Todo) {
    console.log(todo);
    this.data.push(todo);
    this.http.post('/assets/todos.json', todo).subscribe(() => this.load());
  }
}
