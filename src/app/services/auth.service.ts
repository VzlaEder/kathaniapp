import { Injectable } from '@angular/core';
import { Router } from '@angular/router'
import { BehaviorSubject, Observable } from 'rxjs'
import { HttpService } from './http.service'

import { LoginI } from '../models/login.interface';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpService: HttpService, private router: Router) { }


  login(postData: LoginI): Observable<any> {
    return this.httpService.post("auth/login-diabetic", postData);
  }

  logout() {
    localStorage.clear()
    this.router.navigate(['login'])
  }

}
