import {Todo} from './todo';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class TodoProvider {
  data: Array<Todo> = [];

  constructor(private http: HttpClient) { }

  load(): void {
    this.http.get('/assets/todos.json')
      .subscribe(
        (data: Array<Todo>) => data.forEach(
          elt => this.data.push(elt)
        )
      );
  }

  add(todo: Todo) {
    console.log(todo);
    this.data.push(todo);
    this.http.post('/assets/todos.json', todo).subscribe(() => this.load());
  }
}
