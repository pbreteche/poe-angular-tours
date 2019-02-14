import { Component, OnInit } from '@angular/core';
import {Todo} from '../todo';

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

}
