import { Component, OnInit } from '@angular/core';
import {Todo} from '../todo';
import {FormGroup} from '@angular/forms';
import {TodoProvider} from '../todo-provider';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {

  todo = new Todo();
  endDateString: string;
  todayDate = new Date();

  constructor(private provider: TodoProvider) { }

  ngOnInit() {
  }

  get today(): string {
    return this.todayDate.toISOString().substr(0, 10);
  }

  create(form: FormGroup) {
    this.todo.endDate = new Date(this.endDateString);
    this.provider.add(this.todo);
    this.todo = new Todo();
    form.reset();
  }

}
