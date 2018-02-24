import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../providers/auth.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.css']
})
export class ChatPageComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, public app: AppComponent) {
    app.setBreadcrumb('Chat');
  }

  ngOnInit() {
  }

}
