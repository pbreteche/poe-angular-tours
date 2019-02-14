import { Component, OnInit } from '@angular/core';
import {Todo} from '../todo';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {

  todo = new Todo();

  constructor() { }

  ngOnInit() {
  }

}
