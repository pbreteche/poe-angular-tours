import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Todo} from '../todo';
import {TodoProvider} from '../todo-provider';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Array<Todo> = [];
  currentTodo: Todo;
  @Output() selected = new EventEmitter<Todo>();

  constructor(private provider: TodoProvider) {
  }

  ngOnInit() {
    this.provider.load().subscribe(data => {
      console.log(data);
      return this.todos = data;
    });
  }

  isCurrent(todo: Todo): boolean {
    return todo === this.currentTodo;
  }

  select(selection: Todo): void {
    this.currentTodo = selection;
    this.selected.emit(this.currentTodo);
  }
}
