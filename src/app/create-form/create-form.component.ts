import { Component, OnInit } from '@angular/core';
import {Todo} from '../todo';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {

  todo = new Todo();
  todayDate = new Date();

  constructor() { }

  ngOnInit() {
  }

  get today(): string {
    return this.todayDate.toISOString().substr(0, 10);
  }

  create(form: FormGroup) {
    // faire quelque chose avec this.todo
    this.todo = new Todo();
    form.reset();
  }

}
