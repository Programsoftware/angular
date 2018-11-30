import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeOn=true;
  private subject = new Subject<any>();
  constructor() { }

  ngOnInit() {
    this.subject.next({ text: 'true' });
  }


}
