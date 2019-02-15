import {Component, Inject} from '@angular/core';
import {Todo} from './todo';
import {ALIAS_TOKEN, FACTORY_TOKEN, URL_TOKEN} from './config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Toodoo';
  currentTodo: Todo;

  constructor(
    @Inject(URL_TOKEN) url: string,
    @Inject(ALIAS_TOKEN) url2: string,
    @Inject(FACTORY_TOKEN) hello: string,
  ) {
    console.log(url, url2, hello);
  }

  setCurrent(todo: Todo) {
    this.currentTodo = todo;
  }
}
