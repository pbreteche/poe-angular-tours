import { Component } from '@angular/core';
import {Todo} from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello world!';
  private currentTodo: Todo;

  setCurrent(todo: Todo) {
    this.currentTodo = todo;
  }
}
