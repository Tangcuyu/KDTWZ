import { Component, OnInit, Injectable } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
@Injectable()
export class LoginComponent implements OnInit {
  userName: string;
  password: string;

  loginClicked() {
    console.log(`this.userName: ${this.userName}`);
    console.log(`this.password: ${this.password}`);
  }
  constructor() { }

  ngOnInit() {
  }

}
