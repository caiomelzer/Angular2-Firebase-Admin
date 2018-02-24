import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../providers/auth.service';
import { AppComponent } from '../app.component';
import { Todos } from '../providers/todos.service';
import { AngularFire, FirebaseListObservable  } from 'angularfire2';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-todo-detail-page',
  templateUrl: './todo-detail-page.component.html',
  styleUrls: ['./todo-detail-page.component.css']
})
export class TodoDetailPageComponent implements OnInit {
  exercise: any; 
  constructor( private authService: AuthService, private router: Router, public app: AppComponent, private af: AngularFire, private todo: Todos) {
    app.setBreadcrumb('To Do | New');
    this.exercise = {
      name: '',
      description:'',
      repeat:0,
      quantity:0
    };
  }

  ngOnInit() {
 
  }

}
