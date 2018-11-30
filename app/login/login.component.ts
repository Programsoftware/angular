import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
 
import { MessageService } from './_services/index';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  message: any;
  subscription: Subscription; 
  messageService: MessageService;
  isOn=false;
  constructor() { }

  ngOnInit() {
    this.subscription = this.messageService.getMessage().subscribe(message => { this.isOn = message; });
    this.isOn=this.message;
  }

}
