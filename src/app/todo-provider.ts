import {Todo} from './todo';

export class TodoProvider {
  load(): Array<Todo> {
    return [
      {
        title: 'faire du js',
        author: 'Alice',
        endDate: new Date('2019-02-15'),
        description: 'coder, coder et toujours coder'
      },
      {
        title: 'acheter du pain',
        author: 'Bod',
        endDate: new Date('2019-12-31'),
        description: 'une petite tradi'
    },
      {
        title: 'manger du fromage',
        author: 'Alice',
        endDate: new Date('2019-06-21'),
        description: 'le gras, c\'est la vie'
      },
    ];
  }
}
