import {Component, Inject} from '@angular/core';
import {Todo} from './todo';
import {URL_TOKEN} from './config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private currentTodo: Todo;

  constructor(@Inject(URL_TOKEN) url: string) {
    console.log(url);
  }

  setCurrent(todo: Todo) {
    this.currentTodo = todo;
  }
}
