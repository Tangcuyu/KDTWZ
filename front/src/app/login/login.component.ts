import { Component, OnInit, Injectable, EventEmitter, Output } from '@angular/core';
import { LoginService, ILoginForm } from './login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [LoginService],
  styleUrls: ['./login.component.css']
})
@Injectable()
export class LoginComponent implements OnInit {
  loginData: ILoginForm = {
    userName: '',
    password: ''
  };

  @Output() notify: EventEmitter<string> = new EventEmitter();

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  loginClicked(loginData: ILoginForm): void {
    this.loginService.loginIn(loginData)
    .subscribe(data => console.log(data),
    error => {
      console.log(`login error with: ${error}`);
    },
    () => {
      // console.log(`login finished`);
      this.notify.emit('LOGIN_SUCCESSFUL');
    }
    );
  }

}
