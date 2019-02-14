import {Todo} from './todo';
import {Injectable} from '@angular/core';
import {AppModule} from './app.module';

@Injectable({
  providedIn: 'root',
})
export class TodoProvider {
  data: Array<Todo>;

  constructor() {
    this.data = [
      {
        title: 'faire du js',
        author: 'Alice',
        endDate: new Date('2019-02-15'),
        price: 100,
        description: 'coder, coder et toujours coder'
      },
      {
        title: 'acheter du pain',
        author: 'Bod',
        endDate: new Date('2019-12-31'),
        price: 80,
        description: 'une petite tradi'
      },
      {
        title: 'manger du fromage',
        author: 'Alice',
        endDate: new Date('2019-06-21'),
        price: 120,
        description: 'le gras, c\'est la vie'
      },
    ];
  }

  load(): Array<Todo> {
    return this.data;
  }

  add(todo: Todo) {
    console.log(todo);
    this.data.push(todo);
  }
}
