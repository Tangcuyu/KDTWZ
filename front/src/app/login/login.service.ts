import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HandleError } from '../http-error-handler.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

export interface ILoginForm {
  userName: string;
  password: string;
}

export interface ILoginResult {
  loginSatus: string;
}

@Injectable()
export class LoginService {
  private handleError: HandleError;
  constructor(private http: HttpClient) { }

  loginIn(loginData: ILoginForm): Observable<ILoginResult> {
    return this.http.post<ILoginResult>('/login', loginData, {
      headers: httpOptions.headers
    });
  }
}
