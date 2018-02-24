import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule} from 'angularfire2';

import { AppComponent } from './app.component';
import { AuthService } from './providers/auth.service';
import { Todos } from './providers/todos.service';

import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ChatPageComponent } from './chat-page/chat-page.component';
import { NotExistPageComponent } from './not-exist-page/not-exist-page.component';
import { TodoPageComponent } from './todo-page/todo-page.component';
import { TodoDetailPageComponent } from './todo-detail-page/todo-detail-page.component';
import { TodoCreatePageComponent } from './todo-create-page/todo-create-page.component';

export const firebaseConfig = {
    apiKey: "AIzaSyDos-MO-EuQYMtwdIdWMqoXZzz2yT5qjEo",
    authDomain: "wellb-bca43.firebaseapp.com",
    databaseURL: "https://wellb-bca43.firebaseio.com",
    projectId: "wellb-bca43",
    storageBucket: "wellb-bca43.appspot.com",
    messagingSenderId: "111352036560"
};

const routes: Routes = [
  { path: '',   redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: HomePageComponent},
  { path: 'login', component: LoginPageComponent },
  { path: 'todo', component: TodoPageComponent },
  { path: 'todo/new', component: TodoDetailPageComponent },
  { path: 'chat', component: ChatPageComponent },
  { path: '404', component: NotExistPageComponent },
  { path: '**', component: NotExistPageComponent}
  
];

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    ChatPageComponent,
    NotExistPageComponent,
    TodoPageComponent,
    TodoDetailPageComponent,
    TodoCreatePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService, Todos],
  bootstrap: [AppComponent]
})
export class AppModule { }
