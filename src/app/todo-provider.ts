import {Todo} from './todo';

export class TodoProvider {
  load(): Array<Todo> {
    return [
      { title: 'faire du js'},
      { title: 'acheter du pain'},
      { title: 'manger du fromage'},
    ];
  }
}
