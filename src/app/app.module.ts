import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { CreateFormComponent } from './create-form/create-form.component';
import {TodoProvider} from './todo-provider';
import {ALIAS_TOKEN, CONFIG_URL, FACTORY_TOKEN, myFactory, URL_TOKEN} from './config';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoDetailComponent,
    CreateFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    TodoProvider,
    { provide: URL_TOKEN, useValue: CONFIG_URL },
    { provide: ALIAS_TOKEN, useExisting: URL_TOKEN },
    { provide: FACTORY_TOKEN, useFactory: myFactory },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
