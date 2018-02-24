import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../providers/auth.service';
import { AppComponent } from '../app.component';
import { Todos } from '../providers/todos.service';
import { AngularFire, FirebaseListObservable  } from 'angularfire2';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {
  todos: FirebaseListObservable<any[]>;
  offset: number;

  constructor( private authService: AuthService, private router: Router, public app: AppComponent, private af: AngularFire, private todo: Todos) {
    app.setBreadcrumb('To Do');
  }

  delete(todo){
    this.todo.delete(todo);
  }

  ngOnInit() {
    this.offset = 10;
    this.todos = this.todo.read(this.offset);
  }
}
