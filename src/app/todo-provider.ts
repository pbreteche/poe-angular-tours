import {Todo} from './todo';

export class TodoProvider {
  load(): Array<Todo> {
    return [
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
}
