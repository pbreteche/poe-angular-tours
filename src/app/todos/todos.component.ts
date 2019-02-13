import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Todo} from '../todo';
import {TodoProvider} from '../todo-provider';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  provider: TodoProvider;
  todos: Array<Todo>;
  currentTodo: Todo;
  @Output() selected = new EventEmitter<Todo>();

  constructor() {
    this.provider = new TodoProvider();
  }

  ngOnInit() {
    this.todos = this.provider.load();
    this.currentTodo = this.todos[0];
    this.selected.emit(this.currentTodo);
  }

  isCurrent(todo: Todo): boolean {
    return todo === this.currentTodo;
  }

  select(selection: Todo): void {
    this.currentTodo = selection;
    this.selected.emit(this.currentTodo);
  }
}
