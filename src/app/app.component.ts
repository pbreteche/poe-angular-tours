import {Component, Inject} from '@angular/core';
import {Todo} from './todo';
import {ALIAS_TOKEN, URL_TOKEN} from './config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private currentTodo: Todo;

  constructor(
    @Inject(URL_TOKEN) url: string,
    @Inject(ALIAS_TOKEN) url2: string
  ) {
    console.log(url, url2);
  }

  setCurrent(todo: Todo) {
    this.currentTodo = todo;
  }
}
