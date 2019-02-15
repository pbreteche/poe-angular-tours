import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { CreateFormComponent } from './create-form/create-form.component';
import {TodoProvider} from './todo-provider';
import {ALIAS_TOKEN, CONFIG_URL, FACTORY_TOKEN, LOCALE, LOCALE_TOKEN, myFactory, URL_TOKEN} from './config';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoDetailComponent,
    CreateFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '**', component: TodosComponent }
    ]),
  ],
  providers: [
    TodoProvider,
    { provide: URL_TOKEN, useValue: CONFIG_URL },
    { provide: ALIAS_TOKEN, useExisting: URL_TOKEN },
    { provide: LOCALE_TOKEN, useValue: LOCALE },
    { provide: FACTORY_TOKEN, useFactory: myFactory, deps: [LOCALE_TOKEN] },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
