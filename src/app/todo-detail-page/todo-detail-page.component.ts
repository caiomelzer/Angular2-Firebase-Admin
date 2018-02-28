import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../providers/auth.service';
import { AppComponent } from '../app.component';
import { Todos } from '../providers/todos.service';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { NgModel } from '@angular/forms';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-todo-detail-page',
  templateUrl: './todo-detail-page.component.html',
  styleUrls: ['./todo-detail-page.component.css']
})
export class TodoDetailPageComponent implements OnInit {
  todos: FirebaseListObservable<any[]>;
  private subscription: Subscription;
  exercise: FirebaseObjectObservable<any>;
  
  constructor( private authService: AuthService, private router: Router, public app: AppComponent, private af: AngularFire, private todo: Todos) {
    switch(app.getCrudOperation()){
      case 'update':
      console.log(app.getKey());
      this.exercise = this.todo.read(app.getKey());
      console.log(this.exercise);
      break;
      case 'read':
      this.exercise = {
        name: 'dasdsa',
        description:'',
        repeat:0,
        quantity:0
      };
      break;
      default:
        this.exercise = {
          name: '',
          description:'',
          repeat:0,
          quantity:0
        };  
      break;
    }
    app.setBreadcrumb('To Do | New');
    
    
  }


  create(exercise){
    this.todo.create(exercise);
  }

  read(key){
    this.todo.read(key);
  }

  ngOnInit() {
 
  }

}
